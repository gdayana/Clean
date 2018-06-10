import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './../auth.service';
import { Observable } from 'rxjs/Observable';
import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'navbar',
  styleUrls: ['./navbar.component.css'],
  templateUrl: './navbar.component.html',
  providers: [AuthService]
})
export class NavComponent {

    constructor(public auth: AuthService){
    }

    logout(){
        this.auth.logout();
    }
}
