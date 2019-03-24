import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'quote'
})
export class QuotePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return '"' + value + '"';
  }

}
