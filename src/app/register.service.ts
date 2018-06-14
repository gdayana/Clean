import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()

export class RegisterService{
    constructor(private db: AngularFireDatabase){
    }

    // fetchData(){
    //     return this.http.get('https://clean-f84ba.firebaseio.com/.json').map(
    //         (res) => res.json()
    //     );
    //     }
   
    
    create(f){
        return this.db.list('/users/basic').push(f);
    }
}