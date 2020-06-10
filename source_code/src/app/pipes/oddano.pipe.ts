import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oddano'
})
export class OddanoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value==0?'Nie':'Tak';
  }

}
