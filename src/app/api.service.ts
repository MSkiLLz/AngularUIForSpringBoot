import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { User } from './user';
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from "rxjs/operators";



const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {

  }
  
  public createUser(user: User): Observable<User> {
    let getHeaders: HttpHeaders = new HttpHeaders({
      'Accept': 'application/json',
      'Authorization': 'my-token'
    });
    const headers = {headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })};
    return this.http
     .post(API_URL + '/users', user).pipe(
     // .post(API_URL + '/users', user).pipe( 
        map(response => {
          return new User(response);
        }), catchError(this.handleError)
      )
  }

  public updateUser(user: User): Observable<User> {
    return this.http
      .put(API_URL + '/users/' + user.id, user).pipe(
        map(response => {
          return new User(response);
        }), catchError(this.handleError)
      )
  }

  public getAllUsers(): Observable<User[]> {
    return this.http
      .get(API_URL + '/users').pipe(
      map(response => {
        var users = [response];
        return users.map((user)=> new User(user));
      }), catchError(this.handleError))

  }

  public getUserById(userId: number): Observable<User> {
    return this.http
      .get(API_URL + '/users/' + userId).pipe(
        map(response => {
          return new User(response);
        }), catchError(this.handleError)
      )

  }

  public deleteUserById(userId: number): Observable<null> {
    return this.http
      .delete(API_URL + '/users/' + userId).pipe(
        map(response => null), catchError(this.handleError)
      )

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
 }
}
