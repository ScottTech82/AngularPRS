import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'boolDisp'
})
export class BoolDispPipe implements PipeTransform {

  transform(prsBool: boolean): string {
    return prsBool ? "Yes" : "No";
  }

}
