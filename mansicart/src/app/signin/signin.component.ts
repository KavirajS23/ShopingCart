import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormBuilder, FormGroup} from '@angular/forms';
import { validateBasis } from '@angular/flex-layout';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  registrationForm:FormGroup;
  submitted = false;
  userData = new Map<number, any>() ;
  mockdata:User[];
  filteredUser:User;

  constructor(private formBuilder:FormBuilder, private userService: UsersService) {
    
  }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',[Validators.required, Validators.minLength(4)]]
    });    

    this.registrationForm=this.formBuilder.group({
      fullname:['',Validators.required],      
      email:['',Validators.required],
      password:['',Validators.required,Validators.minLength(8)],
      confirm_password:['',Validators.required]
    });
  }

  get fval() {
    console.log(this.signInForm);
    return this.signInForm.controls;
  }

  get fvalsignUp() {
    return this.registrationForm.controls;
  } 

  signIn(){
    this.fval;    
    if (this.signInForm.invalid) {      
      return this.signInForm.controls;
    }
    else{      
      this.userData = this.userService.getUserData();
     console.log("@component: "+ JSON.stringify(this.userData));     
      this.submitted = true;      
      let email = this.signInForm.get("email").value;      
      if(this.userData!=null){ 
        this.filteredUser = this.userData.get(email);
        if(this.filteredUser != null) {
          alert("Valid user");
        }else {
          alert("Please register");
        }
      }
    }
  }
  
  signUp(){
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return this.registrationForm.controls;
    }
    alert('form fields are validated successfully!');
    let firstname = this.registrationForm.get("fullname").value;
    let email_id = this.registrationForm.get("email").value;
    let password = this.registrationForm.get("password").value;
    let c_password=this.registrationForm.get("confirm_password").value;
    this.userService.setUserData();
  }
}