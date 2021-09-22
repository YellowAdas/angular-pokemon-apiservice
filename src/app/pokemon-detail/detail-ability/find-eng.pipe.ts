import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'findEng'
})
export class FindEngPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}