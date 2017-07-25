import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Position} from './position';

@Injectable()
export class PositionService {
  private baseUrl = 'http://localhost:8080/api';  // URL to web API

  constructor(private http: Http) {
  }

  getPositions(): Observable<Position[]> {
    const headers = new Headers({'Accept': 'application/json'});
    const options = new RequestOptions({headers: headers});

    const positions$ = this.http.get(`${this.baseUrl}/position/`, options)
      .map(mapPositions)
      .catch(handleError);
    return positions$;
  }

  getPosition(id: number): Observable<Position> {
    const headers = new Headers({'Accept': 'application/json'});
    const options = new RequestOptions({headers: headers});

    const position$ = this.http
      .get(`${this.baseUrl}/position/${id}`, options)
      .map(mapPositions)
      .catch(handleError);
    return position$;
  }

  savePosition(positionName: string): Observable<Position> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this
      .http
      .post(`${this.baseUrl}/position/`,
        JSON.stringify({positionId: 0, positionName: positionName}),
        options
      )
      .map(mapPositions);
  }

  deletePosition(positionId: number) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this
      .http
      .delete(`${this.baseUrl}/position/${positionId}`, options);
  }

  updatePosition(position: Position) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this
      .http
      .put(`${this.baseUrl}/position/`, position, options)
      .map(mapPositions);
  }
}

function mapPositions(response: Response): Position {
  let body = response.json();
  return body || {};
}

function handleError(error: any) {
  // log error
  const errorMsg = error.message || `Unable to complete operation!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
