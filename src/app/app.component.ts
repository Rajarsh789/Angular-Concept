import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title='blog';

//   // String Interpolation
//   title = 'blog';

//   // Event Bindingng serve
//   showData(){
//   alert("anshu")
//   }

// // Property Binding
// hrefValue="https://google.com"

// // Attribute Binding
// updatelink="https://godaddy.com"

// // Class Binding
// // title="blog";

// name:any;


name: string = 'Peter';

}
