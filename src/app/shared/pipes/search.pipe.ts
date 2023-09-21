import { Pipe, PipeTransform } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {
  transform(tasks: Task[], searchTerm: string): any {
    if (!searchTerm) {
      return tasks;
    }
    searchTerm = searchTerm.toLowerCase();
    const d = tasks.filter((item) => {
      return JSON.stringify(item).toLowerCase().includes(searchTerm);
    });
    return d;
  }
}
