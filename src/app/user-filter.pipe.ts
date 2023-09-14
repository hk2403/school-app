import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

  transform(users:any[], term:string): any[]{
    if (!users || !term) {
      return users;
  }
  term = term.toLowerCase();

    return users.filter(user =>
      user.name.first.toLowerCase().includes(term) ||
      user.name.last.toLowerCase().includes(term)
    );
  }

}
