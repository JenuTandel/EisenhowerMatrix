import { Pipe, PipeTransform } from '@angular/core';
import { TaskStatus } from 'src/app/models/task.model';

@Pipe({
  name: 'label',
})
export class LabelPipe implements PipeTransform {
  transform(value: number): any {
    if (value == 1) {
      return TaskStatus.NotStarted;
    } else if (value == 2) {
      return TaskStatus.InProgress;
    } else {
      return TaskStatus.Done;
    }
  }
}
