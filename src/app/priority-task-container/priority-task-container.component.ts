import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-priority-task-container',
  templateUrl: './priority-task-container.component.html',
  styleUrls: ['./priority-task-container.component.scss'],
})
export class PriorityTaskContainerComponent implements OnInit {
  public allTasks$!: Observable<any>;
  // public allTasks: any;
  public id: any;
  public userId!: number;
  constructor(private taskService: TaskService) {
    this.id = localStorage.getItem('id');
    if (this.id) {
      this.userId = parseInt(this.id);
    }
  }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.allTasks$ = this.taskService.getAllTask();
  }

  getDraggedTask(taskDragged: any) {
    if (taskDragged.column == 'Do First') {
      taskDragged.task.taskUrgency = 'Urgent';
      taskDragged.task.taskImportance = 'Important';
    }
    if (taskDragged.column == 'Schedule') {
      taskDragged.task.taskUrgency = 'Not Urgent';
      taskDragged.task.taskImportance = 'Important';
    }
    if (taskDragged.column == 'Delegate') {
      taskDragged.task.taskUrgency = 'Urgent';
      taskDragged.task.taskImportance = 'Not Important';
    }
    if (taskDragged.column == 'Delete') {
      taskDragged.task.taskUrgency = 'Not Urgent';
      taskDragged.task.taskImportance = 'Not Important';
    }
    this.taskService.updateTask(taskDragged.task).subscribe((res) => {});
  }
}
