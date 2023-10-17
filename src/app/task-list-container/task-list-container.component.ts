import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus } from '../models/task.model';
import { TaskService } from '../services/task/task.service';
import { DataCommunicationsService } from '../core/services/data-communications.service';
import { TaskListPresentationComponent } from './task-list-presentation/task-list-presentation.component';

@Component({
  selector: 'app-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.scss'],
  standalone: true,
  imports: [TaskListPresentationComponent],
})
export class TaskListContainerComponent implements OnInit {
  public allTask: Task[];
  public taskStatus: any;
  public id: any;
  public userId: number | undefined;
  constructor(
    private taskService: TaskService,
    private dataCommunicationsService: DataCommunicationsService
  ) {
    this.allTask = [];
    this.id = localStorage.getItem('id');
    if (this.id) {
      this.userId = parseInt(this.id);
    }
  }
  ngOnInit() {
    this.getAllTasks();
    this.getTaskStatus();

    this.dataCommunicationsService.isUpdated$.subscribe((res) => {
      if (res) {
        this.getAllTasks();
      }
    });
  }
  getAllTasks() {
    this.taskService.getAllTask().subscribe((res) => {
      this.allTask = res.filter((item: any) => item.userId === this.userId);
    });
  }
  deleteTask(taskId: any) {
    this.taskService.deleteTask(taskId).subscribe((res) => {});
    const index = this.allTask.findIndex((res) => res.id == taskId);
    this.allTask.splice(index, 1);
    // this.getAllTasks();
  }

  getTaskData(task: any) {
    const previousStatus = task.item.taskStatus;

    if (task.taskStatus == 1) {
      task.item.taskStatus = 1;
      task.item.completionDate = null;
      if (task.item.startDate) {
        task.item.startDate = null;
      }
    }
    if (task.taskStatus == 2) {
      task.item.taskStatus = 2;
      task.item.completionDate = null;
      if (!task.item.startDate) {
        task.item.startDate = new Date();
      }
    }
    if (task.taskStatus == 3) {
      task.item.taskStatus = 3;
      task.item.completionDate = new Date();
    }

    console.log(task.taskStatus);

    if (task.taskStatus != previousStatus) {
      this.taskService.updateTask(task.item).subscribe((res) => {});
    }

    // const data = this.allTask.filter((res) => res.id == task.item.id);

    // if (data[0].taskStatus == task.taskStatus) {
    // }
  }

  getTaskStatus() {
    this.taskService.getTaskStatus().subscribe((res) => {
      this.taskStatus = res;
    });
  }
}
