import { Component } from '@angular/core';
import { TaskService } from '../services/task/task.service';

@Component({
  selector: 'app-task-status',
  templateUrl: './task-status.component.html',
  styleUrls: ['./task-status.component.scss'],
})
export class TaskStatusComponent {
  public taskStatus: any;
  constructor(private taskService: TaskService) {}
  getTaskStatus() {
    this.taskService.getTaskStatus().subscribe((res) => {
      this.taskStatus = res;
    });
  }
}
