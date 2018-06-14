
import { FormService } from './../form.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { CustomValidators } from 'ng2-validation';


@Component({
  selector: 'houseform',
  styleUrls: ['./houseform.component.css'],
  templateUrl: './houseform.component.html'
})
export class HouseFormComponent implements OnInit {

  houseForm: FormGroup;

  constructor(private formService: FormService, private houseForme: FormBuilder) {
      
    }

  save(f) {
    this.formService.create(f);
  }

  ngOnInit() {
   }

  myFunction() {
    var x = document.getElementById('optional');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}
onSubmit(f) {
  console.log('onSubmit called !');
}


}

