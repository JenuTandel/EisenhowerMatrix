import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task/task.service';
import { Router } from '@angular/router';
import { DataCommunicationsService } from '../core/services/data-communications.service';

@Component({
  selector: 'app-task-form-container',
  templateUrl: './task-form-container.component.html',
  styleUrls: ['./task-form-container.component.scss'],
})
export class TaskFormContainerComponent implements OnInit {
  public userId;
  public id;

  constructor(
    private taskService: TaskService,
    private dataCommunicationsService: DataCommunicationsService
  ) {
    // getting userId from local storage
    this.id = localStorage.getItem('id');
    if (this.id) {
      this.userId = parseInt(this.id);
    }
  }

  ngOnInit() {}

  //Add the task details
  addTaskDetails(data: Task) {
    debugger;
    if (data.id) {
      const taskData = { ...data, userId: this.userId };
      this.taskService.updateTask(taskData).subscribe((res) => {
        if (res) {
          this.dataCommunicationsService.isUpdated.next(true);
        }
      });
    } else {
      const taskData = { ...data, userId: this.userId };
      this.taskService.addTask(taskData).subscribe((res) => {});
    }
  }
}
