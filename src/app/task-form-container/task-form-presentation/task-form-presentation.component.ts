import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { TaskFormPresenterService } from '../task-form-presenter/task-form-presenter.service';
import { FormGroup } from '@angular/forms';
import { Task } from 'src/app/models/task.model';
import { DataCommunicationsService } from 'src/app/core/services/data-communications.service';

@Component({
  selector: 'app-task-form-presentation',
  templateUrl: './task-form-presentation.component.html',
  styleUrls: ['./task-form-presentation.component.scss'],
  providers: [TaskFormPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskFormPresentationComponent implements OnInit {
  @Input() public taskId!: number;
  @Output() addTaskData: EventEmitter<Task>;
  @Output() updateTaskData: EventEmitter<Task>;
  public taskForm: FormGroup;
  public isSubmitted: boolean;

  constructor(
    private taskFormPresenterService: TaskFormPresenterService,
    private dataCommunicationsService: DataCommunicationsService
  ) {
    this.taskForm = this.taskFormPresenterService.buildTaskForm();
    this.isSubmitted = false;
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
        this.taskId = res.id;
      }
    });
  }

  onAddTask() {
    this.isSubmitted = true;
    if (this.taskId) {
      this.taskForm.value.id = this.taskId;
    }
    console.log(this.taskForm);

    this.taskFormPresenterService.addTaskDetails(this.taskForm);
  }
}
