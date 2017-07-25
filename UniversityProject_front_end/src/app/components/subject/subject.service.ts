import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Subject} from './subject';

@Injectable()
export class SubjectService {
  private baseUrl = 'http://localhost:8080/api';  // URL to web API

  constructor(private http: Http) {
  }

  getSubjects(): Observable<Subject[]> {
    const headers = new Headers({'Accept': 'application/json'});
    const options = new RequestOptions({headers: headers});

    const subjects$ = this.http.get(`${this.baseUrl}/subject/`, options)
      .map(mapSubjects)
      .catch(handleError);
    return subjects$;
  }

  getSubject(id: number): Observable<Subject> {
    const headers = new Headers({'Accept': 'application/json'});
    const options = new RequestOptions({headers: headers});

    const subject$ = this.http
      .get(`${this.baseUrl}/subject/${id}`, options)
      .map(mapSubjects)
      .catch(handleError);
    return subject$;
  }

  saveSubject(subjectName: string): Observable<Subject> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});
    return this
      .http
      .post(`${this.baseUrl}/subject/`,
        JSON.stringify({subjectId: 0, subjectName: subjectName}),
        options
      )
      .map(mapSubjects);
  }

  deleteSubject(subjectId: number) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this
      .http
      .delete(`${this.baseUrl}/subject/${subjectId}`, options);
  }

  updateSubject(subject: Subject) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this
      .http
      .put(`${this.baseUrl}/subject/`, subject, options)
      .map(mapSubjects);
  }
}

function mapSubjects(response: Response): Subject {
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
