import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DataCommunicationsService } from 'src/app/core/services/data-communications.service';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { Task } from 'src/app/models/task.model';
import { TaskDetailsComponent } from 'src/app/task-details/task-details.component';
import { TaskFormContainerComponent } from 'src/app/task-form-container/task-form-container.component';
import { TaskListPresenterService } from '../task-list-presenter/task-list-presenter.service';

@Component({
  selector: 'app-task-list-presentation',
  templateUrl: './task-list-presentation.component.html',
  styleUrls: ['./task-list-presentation.component.scss'],
  providers: [TaskListPresenterService],
})
export class TaskListPresentationComponent {
  @Input() allTask: any;
  @Output() deleteTask: EventEmitter<any>;
  @Output() editTask: EventEmitter<any>;
  @Output() taskDetails: EventEmitter<any>;

  constructor(
    private overlayService: OverlayService,
    private dataCommunicationService: DataCommunicationsService
  ) {
    this.deleteTask = new EventEmitter();
    this.editTask = new EventEmitter();
    this.taskDetails = new EventEmitter();
  }
  ngOnInit() {}

  onEditTask(task: Task) {
    setTimeout(() => {
      this.dataCommunicationService.getData(task);
    }, 0);
    this.overlayService.openDialog(TaskFormContainerComponent, 'taskform');
  }
  onDeleteTask(id: number) {
    this.deleteTask.emit(id);
  }
  onTaskDetails(task: Task) {
    setTimeout(() => {
      this.dataCommunicationService.getTaskDetails(task);
    }, 0);
    this.overlayService.openDialog(TaskDetailsComponent, 'task-details');
  }
}
