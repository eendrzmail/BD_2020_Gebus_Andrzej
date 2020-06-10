import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'available'
})
export class AvailablePipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    
    return value=='0'?'Tak':'Nie';
  }

}
