import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { DataCommunicationsService } from 'src/app/core/services/data-communications.service';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { Task, TaskStatus } from 'src/app/models/task.model';
import { TaskDetailsComponent } from 'src/app/task-details/task-details.component';
import { TaskFormContainerComponent } from 'src/app/task-form-container/task-form-container.component';
import { TaskProgressComponent } from 'src/app/task-progress/task-progress.component';
import { TaskListPresenterService } from '../task-list-presenter/task-list-presenter.service';

@Component({
  selector: 'app-task-list-presentation',
  templateUrl: './task-list-presentation.component.html',
  styleUrls: ['./task-list-presentation.component.scss'],
  providers: [TaskListPresenterService],
})
export class TaskListPresentationComponent implements AfterViewInit {
  @Input() allTask: any;
  @Input() taskStatus: any;
  @Output() deleteTask: EventEmitter<any>;
  @Output() editTask: EventEmitter<any>;
  @Output() taskDetails: EventEmitter<any>;
  @Output() getTaskData: EventEmitter<any>;

  constructor(
    private overlayService: OverlayService,
    private dataCommunicationService: DataCommunicationsService
  ) {
    this.deleteTask = new EventEmitter();
    this.editTask = new EventEmitter();
    this.taskDetails = new EventEmitter();
    this.getTaskData = new EventEmitter();
  }
  ngAfterViewInit(): void {}
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

  // Function to update a specific selected value
  updateSelectedValue(task: any, value: string) {
    this.getTaskData.emit({ item: task, taskStatus: value });
  }
}
