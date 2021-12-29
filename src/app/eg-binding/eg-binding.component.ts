import { Component, OnInit } from '@angular/core';
import { Bundle } from 'typescript';

@Component({
  selector: 'app-eg-binding',
  templateUrl: './eg-binding.component.html',
  styleUrls: ['./eg-binding.component.css']
})
export class EgBindingComponent implements OnInit {
  emp: any;

  name = "anshu";
  isdisabled = false;
 
  

  constructor() { }

  ngOnInit(): void {
  
    this.emp = [{
      "empId": "5498",
      "name": "shivam",
      "age": "21"
    },
    {
      "empId": "5448",
      "name": "shiv",
      "age": "24"
    },
    {
      "empId": "5444448",
      "name": "shiv",
      "age": "54"
    },
    ]
  }

  
  onclick(obj: any) {
    alert(JSON.stringify(obj));
    // this.isdisabled = true
  }
}
