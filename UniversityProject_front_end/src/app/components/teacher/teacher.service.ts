import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Teacher} from './teacher';

@Injectable()
export class TeacherService {
  private baseUrl = 'http://localhost:8080/api';  // URL to web API

  constructor(private http: Http) {
  }

  getTeachers(): Observable<Teacher[]> {
    const headers = new Headers({'Accept': 'application/json'});
    const options = new RequestOptions({headers: headers});

    const teachers$ = this.http.get(`${this.baseUrl}/teacher/`, options)
      .map(mapTeachers)
      .catch(handleError);
    return teachers$;
  }

  getTeacher(id: number): Observable<Teacher> {
    const headers = new Headers({'Accept': 'application/json'});
    const options = new RequestOptions({headers: headers});

    const teacher$ = this.http
      .get(`${this.baseUrl}/teacher/${id}`, options)
      .map(mapTeachers)
      .catch(handleError);
    return teacher$;
  }

  saveTeacher(teacher: Teacher): Observable<Teacher> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this
      .http
      .post(`${this.baseUrl}/teacher/`,
        JSON.stringify(teacher),
        options
      )
      .map(mapTeachers);
  }

  deleteTeacher(teacherId: number) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this
      .http
      .delete(`${this.baseUrl}/teacher/${teacherId}`, options);
  }

  updateTeacher(teacher: Teacher) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this
      .http
      .put(`${this.baseUrl}/teacher/`, teacher, options)
      .map(mapTeachers);
  }
}

function mapTeachers(response: Response): Teacher {
  let body = response.json();
  return body || {};
}

function handleError(error: any) {
  // log error
  const errorMsg = error.message || `Unable to complete operation!`;
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
