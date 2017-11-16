import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoFilter'
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos: any, selectedNavItem?: string): any {
   if (!todos) return;
   return todos.filter(({ completed }) => {
     switch (selectedNavItem){
       case 'Active' : return completed === false;
       case 'Completed' : return completed === true;
       default: return true;
     }
   })
  
  }

}
