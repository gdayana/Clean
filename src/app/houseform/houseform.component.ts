import { AngularFireDatabase } from 'angularfire2/database';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import {Component} from '@angular/core';

@Component({
  selector: 'houseform',
  styleUrls: ['./houseform.component.css'],
  templateUrl: './houseform.component.html'
})
export class HouseFormComponent {
    houseform: FormGroup;
    houses$;
    house$;
  constructor(private formBuilder: FormBuilder, db: AngularFireDatabase) {
      this.houses$ = db.list('house');
      this.house$ = db.object('/house/1');
  }


  ngOnInit() {
     this.houseform = this.formBuilder.group({
       
     }); 

}
}
