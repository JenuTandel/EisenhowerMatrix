import { Component, OnInit } from '@angular/core';
import { Task, TaskStatus } from '../models/task.model';
import { TaskService } from '../services/task/task.service';
import { DataCommunicationsService } from '../core/services/data-communications.service';

@Component({
  selector: 'app-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.scss'],
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
  deleteTask(taskId: number) {
    this.taskService.deleteTask(taskId).subscribe((res) => {});
    this.getAllTasks();
  }

  getTaskData(task: any) {
    if (task.taskStatus == TaskStatus.NotStarted) {
      task.item.taskStatus = 1;
    }
    if (task.taskStatus == TaskStatus.InProgress) {
      task.item.taskStatus = 2;
    }
    if (task.taskStatus == TaskStatus.Done) {
      task.item.taskStatus = 3;
    }
    this.taskService.updateTask(task.item).subscribe((res) => {});
  }

  getTaskStatus() {
    this.taskService.getTaskStatus().subscribe((res) => {
      this.taskStatus = res;
    });
  }
}
