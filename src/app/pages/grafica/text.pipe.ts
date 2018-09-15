import { Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';
@Pipe({
  name: 'text'
})
export class TextPipe implements PipeTransform {

   texto: String;

  transform(value: any, args?: any): any { 
    
    if( args ){

      this.texto =  value.substring(1, 30);
      return this.texto;

    }else{
        return value;
    }
 
   

}
}