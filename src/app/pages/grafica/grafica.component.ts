import { Component, OnInit } from '@angular/core';
import { DirectivesDirective } from '../../directives.directive';
import { ActivatedRoute } from '@angular/router';
import {Location} from '@angular/common';


@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styles: []
})
export class GraficaComponent implements OnInit {

  constructor(route: ActivatedRoute, private _location: Location,
    public _directive: DirectivesDirective
  ) {
    const id: string =  route.snapshot.params.id;
    const url: string = route.snapshot.url.join('');
    const user = route.snapshot.data.user;

    console.log( 'id', id , 'url', url, user);
    
   }

   backClicked() {
    this._location.back();
}

  ngOnInit() {

    
  }

}
