import { Component, OnInit } from '@angular/core';
import { DataCommunicationsService } from '../core/services/data-communications.service';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailsComponent implements OnInit {
  public taskDetails: Task;
  constructor(private dataCommunicationsService: DataCommunicationsService) {
    this.taskDetails = {};
  }

  ngOnInit() {
    this.dataCommunicationsService.getDetails$.subscribe((res) => {
      this.taskDetails = res;
    });
  }
}
