import { Injectable, OnInit } from '@angular/core';
import { User } from '../models/user.model';
//import users from '../../assets/jsons/users.json';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {
  //userData: any[] = users;
  userMap =new Map<number, any>();

  constructor(private http:HttpClient) { }

  ngOnInit() {
    //console.log(users);

  }
  getUserData():Map<number,any> {
   /* if(this.userData != null && this.userData.length > 0) {
      this.userData.forEach((data:User)=> {
        this.userMap.set(data.username, data);
      });
      return this.userMap;

    }
    return null;*/


    this.http.get('https://jsonplaceholder.typicode.com/todos/').subscribe((dataCollection:any[])=>  {
      if(dataCollection!=null) { 
        dataCollection.forEach((data:any)=>{  
          console.log("@service"+ JSON.stringify(data));        
          this.userMap.set(data.id,data);         
        });
        console.log("@service"+ this.userMap);
        return this.userMap;
       }         
    });   
    return null; 
  }

  setUserData(){

  }
}
