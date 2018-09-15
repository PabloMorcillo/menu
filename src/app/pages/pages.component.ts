import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, animate, style, state } from '@angular/animations';
import ResizeObserver from 'resize-observer-polyfill';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [ '#caja { width: 300px; border: 1px solid red;  overflow: hidden; transition: height 2s;}'
 ]})

export class PagesComponent implements OnInit {
  text: string ;
  dato = 1;
  fecha: Date;
  arg = false;
  height = 0;
  menu: any[] = [];
  listProgram: any[] = [];
   name: String;
   menuProgram: any [] = [];
   task_names: any[] = [];

  constructor( route: ActivatedRoute ) { 

    this.fecha = new Date();
    console.log(this.fecha);
    const id: string = route.snapshot.params.id;
    const url: string = route.snapshot.url.join('');
    const user = route.snapshot.data.user;

    console.log( 'id', id , 'url', url, user);
  }

  state: String = 'small';

  animateMe() {
        this.state = (this.state === 'small' ? 'large' : 'small');
  }
    


  ngOnInit() {
    this.localHost();
    this.setMenu();

    this.listProgram[0].textLegal.forEach( element => {
       this.listProgram[0].Legaladmin.map(( item ) => ( item.idtitle == element.idtitle) ? element.title = item.title : ' -- ');
    });

    console.log('pureba', this.listProgram)
    this.text =  'del PP, Pablo Casado, alivia a la nueva dirección popular';
    this.text +=  'del PP, Pablo Casado, alivia a la nueva dirección popular';
    this.text +=  'del PP, Pablo Casado, alivia a la nueva dirección popular';
    this.text +=  'del PP, Pablo Casado, alivia a la nueva dirección popular';
    this.text +=  'del PP, Pablo Casado, alivia a la nueva dirección popular';
    const ro = new ResizeObserver(entries => {
      for (const entry of entries) {
        const cr = entry.contentRect;
    console.log('Element:', entry.target);
    console.log(`Element size: ${cr.width}px x ${cr.height}px`);
    console.log(`Element padding: ${cr.top}px ; ${cr.left}px`);
    //  entry.target.style.height = ` ${cr.height}px`;
    return cr.height;
      }
    });
    // Only observe the second box

}


localHost() {

  this.listProgram = [{
        program: [{ convocatoria: '2017', idprogram: '1'}, { convocatoria: '2018', idprogram: '4'}],
        textLegal: [{ url: 'sport', idProgram: 4 , idtitle: 5 },
                    { url: 'marca', idProgram: 1 , idtitle: 2 },
                    { url: 'sport', idProgram: 3 , idtitle: 1 },
                    { url: 'luna', idProgram: 4 , idtitle: 6 },
                    { url: 'elpais', idProgram: 4 , idtitle: 7},
                    { url: 'terra', idProgram: 3 , idtitle: 8 },
                    { url: 'jupiter', idProgram: 4 , idtitle: 3 }],
       Legaladmin: [{title: 'El dia del mañana', idtitle: 2},
                    {title: 'independence day', idtitle: 5},
                    {title: 'Aliens return', idtitle: 3},
                    {title: 'Phrometeus', idtitle: 7},
                    {title: 'la guerra de los mundos', idtitle: 8},
                    {title: 'Matrix', idtitle: 6},
                    {title: 'predator', idtitle: 1}]     
  ]

}




setMenu(){

  
  const  subMenuLegal: any[] = [];
 
  let i = 0;


for( let program of this.listProgram[0].program) {
              alert( this.listProgram.length )
               this.menuProgram = [];
                 for ( let itemProgram of this.listProgram[0].textLegal){
                        
                      if( itemProgram.idProgram == program.idprogram){
                        this.menuProgram.push( itemProgram )
                      }

                 }
        this.menu.push({ name: program.idprogram, menu: this.menuProgram })
         
 } 
 



                                  





  // const subMenu: any [] = [{ 
  //                            nameProgram: name,
  //                            textLegals: subMenuLegal
  //                         }]; 

}

}