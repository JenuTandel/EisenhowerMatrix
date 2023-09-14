import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-priority-task-presentation',
  templateUrl: './priority-task-presentation.component.html',
  styleUrls: ['./priority-task-presentation.component.scss'],
})
export class PriorityTaskPresentationComponent implements OnInit {
  @Input() public set allTasks(allTasks: Task[] | null) {
    if (allTasks) {
      this._allTasks = this._allTasks.concat(allTasks);

      // filter do first tasks
      this.doTasks = this._allTasks.filter(
        (item: any) =>
          item.taskUrgency == 'Urgent' && item.taskImportance == 'Important'
      );

      //filter schedule tasks
      this.scheduleTasks = this.allTasks.filter(
        (item: any) =>
          item.taskUrgency == 'Not Urgent' && item.taskImportance == 'Important'
      );

      //filter delegate tasks
      this.delegateTasks = this.allTasks.filter(
        (item: any) =>
          item.taskUrgency == 'Urgent' && item.taskImportance == 'Not Important'
      );

      //filter delete tasks
      this.deleteTasks = this.allTasks.filter(
        (item: any) =>
          item.taskUrgency == 'Not Urgent' &&
          item.taskImportance == 'Not Important'
      );
    }
  }

  public get allTasks(): Task[] {
    return this._allTasks;
  }

  private _allTasks: Task[];
  public doTasks: any;
  public scheduleTasks: any;
  public delegateTasks: any;
  public deleteTasks: any;

  constructor() {
    this._allTasks = [];
  }
  ngOnInit(): void {}
}
