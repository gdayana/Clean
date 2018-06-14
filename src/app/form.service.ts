import { AngularFireDatabase } from 'angularfire2/database';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';


@Injectable()
export class FormService {
    basic: Observable<any>;
    
    constructor(private db: AngularFireDatabase){ 
    }

    create(f){
        return this.db.list('/houseform/basic').push(f);
    }

    getAll(){
        this.basic = this.db.list('/houseform/basic').valueChanges();

    }
   
}