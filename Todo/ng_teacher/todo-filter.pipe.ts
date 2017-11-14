import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoFilter',
  pure: false
})
export class TodoFilterPipe implements PipeTransform {

  transform(todos: any, status?: string): any {

    if (!todos) return;

    // 필터링된 todos를 반환한다
    return todos.filter(({ completed }) => {
      switch (status) {
        case 'Active': return completed === false;
        case 'Completed': return completed === true;
        default: return true;
      }
    });
  }

}
