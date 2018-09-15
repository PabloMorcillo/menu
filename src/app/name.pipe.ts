import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  listProgram = [{
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

title: String;


  transform(value: any, args?: any): any {
    // tslint:disable-next-line:no-unused-expression
    
    this.listProgram[0].Legaladmin.forEach(element => {
      
              if( element.idtitle == value ){
                 this.title = element.title;
              }
    });
    return this.title;
  }






  

}
