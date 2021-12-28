import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-test',
   templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  isLogIn : boolean = true;
   isLogOut : boolean = false; 

   list=[1,2,3,4,5,6]

   loginName='user';

   clsname="one";
   clsname2="two";

   @Input() userName="string";


  constructor() { 
  }

  ngOnInit(): void {
  }

}
