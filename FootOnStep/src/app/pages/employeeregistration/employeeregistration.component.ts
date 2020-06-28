import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-employeeregistration',
  templateUrl: './employeeregistration.component.html',
  styleUrls: ['./employeeregistration.component.scss']
})
export class EmployeeregistrationComponent implements OnInit {

  constructor(private _router : Router,
              private fb:FormBuilder) { }

  myForm : FormGroup;
  submitted = false;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      fname : ['', Validators.required],
      lname : ['', Validators.required],
      contact : ['', Validators.required],
      city : ['', Validators.required],
      email : ['', Validators.required],
      password :['', Validators.required],
    });
  }
  submit(){
    this.submitted = true;
    if(this.myForm.invalid){
      return;
    }
  }
}
