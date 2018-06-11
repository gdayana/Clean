import { AuthService } from './../auth.service';
import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, NG_ASYNC_VALIDATORS } from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';
import {AngularFireAuth} from 'angularfire2/auth';


@Component({
  selector: 'glogin',
  templateUrl: './glogin.component.html',
  styleUrls: ['./glogin.component.css'],
  providers: [AuthService]
})

export class GLogin {

  constructor(private auth: AuthService) {
      
  }
    login(){
     this.auth.login();
    }
}