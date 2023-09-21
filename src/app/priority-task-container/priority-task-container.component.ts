import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task/task.service';
import { Observable } from 'rxjs';
import { TaskImportance, TaskUrgency } from '../models/task.model';
import { PriorityTaskPresentationComponent } from './priority-task-presentation/priority-task-presentation.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-priority-task-container',
  templateUrl: './priority-task-container.component.html',
  styleUrls: ['./priority-task-container.component.scss'],
  standalone: true,
  imports: [PriorityTaskPresentationComponent, CommonModule],
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
      taskDragged.task.taskUrgency = TaskUrgency.Urgent;
      taskDragged.task.taskImportance = TaskImportance.Important;
    }
    if (taskDragged.column == 'Schedule') {
      taskDragged.task.taskUrgency = TaskUrgency.NotUrgent;
      taskDragged.task.taskImportance = TaskImportance.Important;
    }
    if (taskDragged.column == 'Delegate') {
      taskDragged.task.taskUrgency = TaskUrgency.Urgent;
      taskDragged.task.taskImportance = TaskImportance.NotImportant;
    }
    if (taskDragged.column == 'Delete') {
      taskDragged.task.taskUrgency = TaskUrgency.NotUrgent;
      taskDragged.task.taskImportance = TaskImportance.NotImportant;
    }
    this.taskService.updateTask(taskDragged.task).subscribe((res) => {});
  }
}
