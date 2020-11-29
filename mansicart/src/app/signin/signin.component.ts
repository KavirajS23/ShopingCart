import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormBuilder, FormGroup} from '@angular/forms';
import { validateBasis } from '@angular/flex-layout';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  signInForm: FormGroup;
  registrationForm:FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.signInForm = this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required,Validators.minLength(8)]
    })

    this.registrationForm=this.formBuilder.group({
      fullname:['',Validators.required],      
      email:['',Validators.required],
      password:['',Validators.required,Validators.minLength(8)],
      confirm_password:['',Validators.required]
    })

  }

  get fval() {
    return this.signInForm.controls;
  }

  get fvalsignUp() {
    return this.registrationForm.controls;
  }

  signIn(){
    this.submitted = true;
    if (this.signInForm.invalid) {
      return;
    }
    alert('form fields are validated successfully!');
  }
  
  signUp(){
    this.submitted = true;
    if (this.registrationForm.invalid) {
      return;
    }
    alert('form fields are validated successfully!');
  }
}