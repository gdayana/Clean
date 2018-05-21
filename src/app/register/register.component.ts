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
      firstname: ['', Validators.required, CustomValidators.length[3]],
      lastname: ['', Validators.required, CustomValidators.length[3]], 
      username: ['',[Validators.required, CustomValidators.length[5]]],
      email: ['', [Validators.required, CustomValidators.validateEmail]],
      password:['', Validators.required, CustomValidators.length[6]],
      city: ['', Validators.required]

    });
  }
  submitForm(): void {
    console.log(this.registerForm);
  }
}
