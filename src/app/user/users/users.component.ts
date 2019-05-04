import { Component, OnInit } from '@angular/core';
import { User } from '../models/user'
import { UserService } from '../user.service'

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[];
  selectedUser: User;
  isShowUserForm = false;

  constructor(
    private userServ: UserService
  ) { }

  ngOnInit() {
    this.users = this.userServ.getUsers();
  }

}