import { Pipe, PipeTransform } from '@angular/core';
import { Http } from '@angular/http';
@Pipe({
  name: 'pipe'
})
export class PipePipe implements PipeTransform {
  valorDepromesa: any;
  constructor( ){

  }

  transform(value: any, args?: any): any { 

    
 
    return "hola"

}
}