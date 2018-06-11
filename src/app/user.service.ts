import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';


@Injectable()
export class UserService {

    
    constructor(private db: AngularFireDatabase){ 
    }

   save(user: firebase.User){
    this.db.object('/users/' + user.uid).update({
        name: user.displayName,
        email: user.email
    });
   }
}