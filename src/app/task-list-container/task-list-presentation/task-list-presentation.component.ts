import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-list-presentation',
  templateUrl: './task-list-presentation.component.html',
  styleUrls: ['./task-list-presentation.component.scss'],
})
export class TaskListPresentationComponent {
  @Input() allTask: any;

  constructor() {}
  ngOnInit() {
    console.log(this.allTask);
  }
}
