import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';

import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  private usersUrl = 'http://localhost:8080/Controller?action=GetUsersAngular';
  private usersUrlPost = 'http://localhost:8080/Controller?action=UpdateUserAngular';

  constructor(private http: HttpClient) {
  }

  // Observables provide support for passing messages between
  // publishers and subscribers in your application
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  updateUser(user: User) {
    console.log(user);
    return this.http.post<User>(this.usersUrlPost + '&firstName=' + user.voornaam + '&lastName=' + user.naam
                  + '&email=' + user.email + '&geslacht=' + user.geslacht + '&leeftijd=' + user.leeftijd, user).subscribe();
  }
}
