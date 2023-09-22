import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TaskFormPresenterService } from '../task-form-presenter/task-form-presenter.service';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Task } from 'src/app/models/task.model';
import { DataCommunicationsService } from 'src/app/core/services/data-communications.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-task-form-presentation',
  templateUrl: './task-form-presentation.component.html',
  styleUrls: ['./task-form-presentation.component.scss'],
  providers: [TaskFormPresenterService],
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, SharedModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormPresentationComponent implements OnInit {
  @Output() addTaskData: EventEmitter<Task>;
  @Output() updateTaskData: EventEmitter<Task>;
  public taskForm: FormGroup;
  public isSubmitted: boolean;
  public isUpdated: boolean;
  public taskStatus: any;
  public taskId!: number;

  constructor(
    private taskFormPresenterService: TaskFormPresenterService,
    private dataCommunicationsService: DataCommunicationsService,
    private cdr: ChangeDetectorRef
  ) {
    this.taskForm = this.taskFormPresenterService.buildTaskForm();
    this.isSubmitted = false;
    this.isUpdated = false;
    this.taskStatus = null;
    this.addTaskData = new EventEmitter();
    this.updateTaskData = new EventEmitter();
  }
  ngOnInit(): void {
    this.taskFormPresenterService.add$.subscribe((res) => {
      this.addTaskData.emit(res);
    });

    this.dataCommunicationsService.editData$.subscribe((res) => {
      if (res) {
        this.taskForm.patchValue(res);
        this.cdr.markForCheck();
        this.taskId = res.id;
        this.taskStatus = res.taskStatus;
        this.isUpdated = true;
      }
    });
  }

  onAddTask() {
    this.isSubmitted = true;
    if (this.taskId) {
      this.taskForm.value.id = this.taskId;
      this.taskForm.value.taskStatus = this.taskStatus;
    }
    this.taskFormPresenterService.addTaskDetails(this.taskForm);
  }
}
