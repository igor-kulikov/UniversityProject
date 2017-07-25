import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {Student} from './student';

@Injectable()
export class StudentService {
  private baseUrl = 'http://localhost:8080/api';  // URL to web API

  constructor(private http: Http) {
  }

  getStudents(): Observable<Student[]> {
    const headers = new Headers({'Accept': 'application/json'});
    const options = new RequestOptions({headers: headers});

    const students$ = this.http.get(`${this.baseUrl}/student/`, options)
      .map(mapStudents)
      .catch(handleError);
    return students$;
  }

  getStudent(id: number): Observable<Student> {
    const headers = new Headers({'Accept': 'application/json'});
    const options = new RequestOptions({headers: headers});

    const student$ = this.http
      .get(`${this.baseUrl}/student/${id}`, options)
      .map(mapStudents)
      .catch(handleError);
    return student$;
  }

  saveStudent(student: Student): Observable<Student> {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this
      .http
      .post(`${this.baseUrl}/student/`,
        JSON.stringify(student),
        options
      )
      .map(mapStudents);
  }

  deleteStudent(studentId: number) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this
      .http
      .delete(`${this.baseUrl}/student/${studentId}`, options);
  }

  updateStudent(student: Student) {
    const headers = new Headers({'Content-Type': 'application/json'});
    const options = new RequestOptions({headers: headers});

    return this
      .http
      .put(`${this.baseUrl}/student/`, student, options)
      .map(mapStudents);
  }
}

function mapStudents(response: Response): Student {
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
