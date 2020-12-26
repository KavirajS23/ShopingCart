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
  userData: Map<string, User>;
  filteredUser:User;

  constructor(private formBuilder:FormBuilder, private userService: UsersService) {
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

  ngOnInit() {

  }

  get fval() {
    return this.signInForm.controls;
  }

  get fvalsignUp() {
    return this.registrationForm.controls;
  }

  signIn(){
    
    if (this.signInForm.invalid) {
      return this.signInForm.controls;
    }
    else{
      this.userData = this.userService.getUserData();
      console.log("UserObj: "+this.userData.toString());
      this.submitted = true;
      let email = this.signInForm.get("email").value;
      this.filteredUser = this.userData.get(email);
      if(this.filteredUser != null) {
        alert("Valid user");
      }else {
        alert("Please register");
      }
    }
  }
  
  signUp(){
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    alert('form fields are validated successfully!');
  }
}