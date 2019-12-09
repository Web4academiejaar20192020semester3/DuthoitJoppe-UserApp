import {Component, Input, OnInit} from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';
import { timer } from 'rxjs';

// const Users: User = {voornaam: 'joppe', naam: 'duthoit', leeftijd: 19, geslacht: 'M', email: 'joppe.duthoit@gmail.com'}

@Component({
  selector: 'app-users',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  title = 'User list';
  users: User[];
  selectedUser: User;

  onSelect(user: User): void {
    this.selectedUser = user;
  }

  constructor(private userService: UserService) {
  }

  getUsers(): void {
    // polling
    timer(0, 2500)
      .subscribe(() => {
        this.userService.getUsers()
          .subscribe(data => this.users = data);
      });
  }

  updateUser(user: User): void {
    this.userService.updateUser(user);
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
