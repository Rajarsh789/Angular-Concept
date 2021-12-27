import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // String Interpolation
  title = 'blog';

  // Event Binding
  showData(){
  alert("anshu")
  }

// Property Binding
hrefValue="https://google.com"

// Attribute Binding
updatelink="https://godaddy.com"

// Class Binding
// title="blog";

name:any;
}
