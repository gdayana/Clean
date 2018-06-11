import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'

@Injectable()

export class RegisterService{
    constructor(private http: Http){
    }

    // fetchData(){
    //     return this.http.get('https://clean-f84ba.firebaseio.com/.json').map(
    //         (res) => res.json()
    //     );
    //     }
   
    
}