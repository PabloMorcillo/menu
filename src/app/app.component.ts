import { Component } from '@angular/core';
import { DirectivesDirective } from './directives.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  

  constructor( public dire: DirectivesDirective){
     
  }
}
