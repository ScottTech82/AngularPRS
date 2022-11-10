import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user.class';

@Pipe({
  name: 'userSearch'
})
export class UserSearchPipe implements PipeTransform {


  transform(users: User[], search: string = ""): User[] {
    let selected: User[] = [];
    for(let u of users) {
      if(u.lastname.toLowerCase().includes(search) 
      || (u.email !== null && u.email.toLowerCase().includes(search))
      || (u.firstname !== null && u.firstname.toLowerCase().includes(search))) {
        selected.push(u);
      }
    }
    return selected;
  }

}
