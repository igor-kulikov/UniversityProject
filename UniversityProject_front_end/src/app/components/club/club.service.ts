import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Club} from './club';

@Injectable()
export class ClubService {
  private baseUrl = 'http://localhost:8080/api';  // URL to web API

  constructor(private http: Http) {
  }

  getClubs(): Observable<Club[]> {
    const headers = new Headers({'Accept': 'application/json'});
    const options = new RequestOptions({headers: headers});

    const clubs$ = this.http.get(`${this.baseUrl}/club/`, options)
      .map(mapClubs)
      .catch(handleError);
    return clubs$;
  }

  getClub(id: number): Observable<Club> {
    const headers = new Headers({'Accept': 'application/json'});
    const options = new RequestOptions({headers: headers});

    const club$ = this.http
      .get(`${this.baseUrl}/club/${id}`, options)
      .map(mapClubs)
      .catch(handleError);
    return club$;
  }

  saveClub(clubName: string): Observable<Club> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this
      .http
      .post(`${this.baseUrl}/club/`,
        JSON.stringify({clubId: 0, clubName: clubName}),
        options
      )
      .map(mapClubs);
  }

  deleteClub(clubId: number) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this
      .http
      .delete(`${this.baseUrl}/club/${clubId}`, options);
  }

  updateClub(club: Club) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this
      .http
      .put(`${this.baseUrl}/club/`, club, options)
      .map(mapClubs);
  }
}

function mapClubs(response: Response): Club {
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
