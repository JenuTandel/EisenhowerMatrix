import { Component } from '@angular/core';
import { UserAuthService } from '../core/services/user-auth.service';
import { TaskService } from '../services/task/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-form-container',
  templateUrl: './task-form-container.component.html',
  styleUrls: ['./task-form-container.component.scss'],
})
export class TaskFormContainerComponent {
  public userId;
  public id;

  constructor(private taskService: TaskService) {
    // getting userId from local storage
    this.id = localStorage.getItem('id');
    if (this.id) {
      this.userId = parseInt(this.id);
    }
  }
  //Add the task details
  addTaskDetails(data: Task) {
    const taskData = { ...data, userId: this.userId };
    this.taskService.addTask(taskData).subscribe((res) => {});
  }
}
