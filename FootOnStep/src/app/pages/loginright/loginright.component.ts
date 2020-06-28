import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-loginright',
  templateUrl: './loginright.component.html',
  styleUrls: ['./loginright.component.scss']
})
export class LoginrightComponent implements OnInit {

  constructor(private _router : Router,
              private fb:FormBuilder) { }

  myForm : FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      email : ['', Validators.required],
      password :['', Validators.required],
    });
  }
  login(){
    this.submitted = true;
    if(this.myForm.invalid){
      return;
    }
  }

}
