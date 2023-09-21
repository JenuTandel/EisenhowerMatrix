import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Task, TaskImportance, TaskUrgency } from 'src/app/models/task.model';
import {
  CdkDragDrop,
  CdkDragStart,
  DragDropModule,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { Board } from 'src/app/models/board.model';
import { Column } from 'src/app/models/column.model';
import { PriorityTaskPresenterService } from '../priority-task-presenter/priority-task-presenter.service';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-priority-task-presentation',
  templateUrl: './priority-task-presentation.component.html',
  styleUrls: ['./priority-task-presentation.component.scss'],
  providers: [PriorityTaskPresenterService],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [CommonModule, DragDropModule, SharedModule],
})
export class PriorityTaskPresentationComponent implements OnInit {
  @Input({ required: true }) public set allTasks(allTasks: Task[] | null) {
    if (allTasks) {
      //If task is done, then don't prioritize
      allTasks = allTasks.filter((res) => res.taskStatus !== 3);
      this._allTasks = this._allTasks.concat(allTasks);

      // filter do first tasks
      this.doTasks = this._allTasks.filter(
        (item: any) =>
          item.taskUrgency == TaskUrgency.Urgent &&
          item.taskImportance == TaskImportance.Important
      );

      //filter schedule tasks
      this.scheduleTasks = this.allTasks.filter(
        (item: any) =>
          item.taskUrgency == TaskUrgency.NotUrgent &&
          item.taskImportance == TaskImportance.Important
      );

      //filter delegate tasks
      this.delegateTasks = this.allTasks.filter(
        (item: any) =>
          item.taskUrgency == TaskUrgency.Urgent &&
          item.taskImportance == TaskImportance.NotImportant
      );

      //filter delete tasks
      this.deleteTasks = this.allTasks.filter(
        (item: any) =>
          item.taskUrgency == TaskUrgency.NotUrgent &&
          item.taskImportance == TaskImportance.NotImportant
      );
    }
    this.board = new Board('Priorities', [
      new Column('Do First', this.doTasks),
      new Column('Schedule', this.scheduleTasks),
      new Column('Delegate', this.delegateTasks),
      new Column('Delete', this.deleteTasks),
    ]);
  }
  @Output() public getDraggedTask: EventEmitter<any>;

  public get allTasks(): Task[] {
    return this._allTasks;
  }
  public board!: Board;

  private _allTasks: Task[];
  public doTasks: any;
  public scheduleTasks: any;
  public delegateTasks: any;
  public deleteTasks: any;
  public draggedItem: any;

  constructor() {
    this._allTasks = [];
    this.getDraggedTask = new EventEmitter<any>();
  }

  ngOnInit(): void {}
  // Event handler for drag start
  onDragStarted(event: CdkDragStart) {
    this.draggedItem = event.source.data;
  }
  drop(event: CdkDragDrop<string[]>) {
    // console.log(event.container);
    // console.log(event.previousContainer);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      this.getDraggedTask.emit({
        task: this.draggedItem,
        column: event.container.connectedTo,
      });
    }
  }
}
