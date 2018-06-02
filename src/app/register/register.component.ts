import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NG_ASYNC_VALIDATORS } from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}
 

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['', [ Validators.required, Validators.minLength(3) ] ],
      lastname: ['', [Validators.required, Validators.minLength(3)]], 
      username: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, CustomValidators.validateEmail]],
      password:['', [Validators.required, Validators.minLength(6)]],
      city: ['', [Validators.required, Validators.minLength(3)]]

    });
  }

  submitForm(): void {
    console.log(this.registerForm);
  }
}
