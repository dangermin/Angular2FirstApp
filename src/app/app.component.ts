import { Component } from '@angular/core';
import { DatabindingComponent } from './databinding';

@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  template: `
    <h1>Root Component</h1>
    <app-databinding></app-databinding>
  `,
  //directives: [DatabindingComponent]
})
export class AppComponent {
  title = 'Angular2 app works!';
}
