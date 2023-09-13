import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { OverlayService } from 'src/app/core/services/overlay.service';
import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskFormPresenterService {
  public add$: Observable<Task>;
  private add: Subject<Task>;

  constructor(
    private formBuilder: FormBuilder,
    private overlayService: OverlayService
  ) {
    this.add$ = new Observable();
    this.add = new Subject();
    this.add$ = this.add.asObservable();
  }
  public buildTaskForm(): FormGroup {
    return this.formBuilder.group({
      taskName: ['', [Validators.required]],
      taskDescription: ['', [Validators.required]],
      taskUrgency: ['Urgent', [Validators.required]],
      taskImportance: ['Important', [Validators.required]],
      startDate: [''],
      dueDate: ['', [Validators.required]],
    });
  }

  public addTaskDetails(taskForm: FormGroup): void {
    if (taskForm.valid) {
      this.add.next(taskForm.value);
      this.overlayService.closeDialog.next(true);
    }
  }
}
