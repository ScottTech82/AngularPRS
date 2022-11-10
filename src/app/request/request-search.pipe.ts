import { Pipe, PipeTransform } from '@angular/core';
import { Request } from './request.class';

@Pipe({
  name: 'requestSearch'
})
export class RequestSearchPipe implements PipeTransform {

  transform(request: Request[], search: string = ""): Request[] {
    let selected: Request[] = [];
    for(let r of request) {
      if(r.user.username.includes(search)) {
        selected.push(r);
      }
    }
    return selected;
  }

}
