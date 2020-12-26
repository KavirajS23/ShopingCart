import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import users from '../../assets/jsons/users.json';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {
  userData: User[] = users;
  userMap: Map<string, User>;

  constructor() { }

  ngOnInit() {
    console.log(users);

  }
  getUserData() {
    if(this.userData != null && this.userData.length > 0) {
      this.userData.forEach((data:User)=> {
        this.userMap.set(data.username, data);
      });
      return this.userMap;
    }
    return null;
  }
}
