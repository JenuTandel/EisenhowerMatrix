import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task/task.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-list-container',
  templateUrl: './task-list-container.component.html',
  styleUrls: ['./task-list-container.component.scss'],
})
export class TaskListContainerComponent implements OnInit {
  public allTask: Task[];
  public id: any;
  public userId: number | undefined;
  constructor(private taskService: TaskService) {
    this.allTask = [];
    this.id = localStorage.getItem('id');
    if (this.id) {
      this.userId = parseInt(this.id);
    }
  }
  ngOnInit() {
    this.getAllTasks();
  }
  getAllTasks() {
    this.taskService.getAllTask().subscribe((res) => {
      this.allTask = res.filter((item: any) => item.userId === this.userId);
    });
  }
}
