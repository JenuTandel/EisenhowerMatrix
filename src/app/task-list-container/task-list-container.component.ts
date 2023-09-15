import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task/task.service';
import { DataCommunicationsService } from '../core/services/data-communications.service';

@Component({
  selector: 'app-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.scss'],
})
export class TaskListContainerComponent implements OnInit {
  public allTask: Task[];
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

    this.dataCommunicationsService.isUpdated$.subscribe((res) => {
      console.log(res);

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
}
