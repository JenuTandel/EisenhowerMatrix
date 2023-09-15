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
import { Task } from 'src/app/models/task.model';
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
  @Output() deleteTask: EventEmitter<any>;
  @Output() editTask: EventEmitter<any>;
  @Output() taskDetails: EventEmitter<any>;
  @ViewChildren('selectedValues') selectedValueElements!: QueryList<ElementRef>;

  constructor(
    private overlayService: OverlayService,
    private dataCommunicationService: DataCommunicationsService
  ) {
    this.deleteTask = new EventEmitter();
    this.editTask = new EventEmitter();
    this.taskDetails = new EventEmitter();
  }
  ngAfterViewInit(): void {
    let s = document.getElementById('selectedValue');
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

  // Function to update a specific selected value
  updateSelectedValue(index: number, value: string) {
    console.log(value);

    const selectedValueElement =
      this.selectedValueElements.toArray()[index].nativeElement;
    selectedValueElement.textContent = value;
    if (value == 'Not Started') {
      debugger;
      selectedValueElement.classList.add('p-2', 'rounded-2', 'me-2', 'bg-gray');
    }
    if (value == 'In Progress') {
      debugger;
      selectedValueElement.classList.add(
        'p-2',
        'rounded-2',
        'me-2',
        'bg-info',
        'text-white'
      );
    }
    if (value == 'Done') {
      debugger;
      selectedValueElement.classList.add(
        'py-2',
        'px-4',
        'rounded-2',
        'me-2',
        'bg-success',
        'text-white'
      );
    }
  }
  // onDropDown(clickedSpan: HTMLSpanElement) {
  //   const rect = clickedSpan.getBoundingClientRect();
  //   const overlayPosition = {
  //     top: rect.bottom + window.scrollY + 'px',
  //     left: rect.left + 'px',
  //   };

  //   this.overlayService.openDialog(TaskProgressComponent, 'task-progress');
  //   // Get a reference to the overlay element with the 'task-progress' class
  //   const overlayElement = document.querySelector(
  //     '.task-progress'
  //   ) as HTMLElement;

  //   // Apply overlayPosition values as inline styles
  //   overlayElement.style.top = overlayPosition.top;
  //   overlayElement.style.left = overlayPosition.left;
  // }
}
