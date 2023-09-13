import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TaskFormPresenterService } from '../task-form-presenter/task-form-presenter.service';
import { FormGroup } from '@angular/forms';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-form-presentation',
  templateUrl: './task-form-presentation.component.html',
  styleUrls: ['./task-form-presentation.component.scss'],
})
export class TaskFormPresentationComponent implements OnInit {
  @Output() addTaskData: EventEmitter<Task>;
  public taskForm: FormGroup;
  public isSubmitted: boolean;

  constructor(private taskFormPresenterService: TaskFormPresenterService) {
    this.taskForm = this.taskFormPresenterService.buildTaskForm();
    this.isSubmitted = false;

    this.addTaskData = new EventEmitter();
  }
  ngOnInit(): void {
    this.taskFormPresenterService.add$.subscribe((res) => {
      this.addTaskData.emit(res);
    });
  }

  onAddTask() {
    this.isSubmitted = true;
    this.taskFormPresenterService.addTaskDetails(this.taskForm);
  }
}
