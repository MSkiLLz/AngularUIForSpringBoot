import { Injectable } from '@angular/core';
import { User } from './user';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private api: ApiService) { }

  addUser(user: User): Observable<User> {
    return this.api.createUser(user);
  }

  getAllUsers(): Observable<User[]> {
    return this.api.getAllUsers();
  }

  updateUser(user: User): Observable<User> {
    return this.api.updateUser(user);
  }

  getUserById(userId: number): Observable<User> {
    return this.api.getUserById(userId);
  }

  deleteUserById(userId: number): Observable<User> {
    return this.api.deleteUserById(userId);
  }
}
