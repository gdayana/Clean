import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NG_ASYNC_VALIDATORS } from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['',[Validators.required, CustomValidators.length[5]]],
      password:['', Validators.required, CustomValidators.length[6]],
    });
  }
  submitForm(): void {
    console.log(this.loginForm);
  }
}