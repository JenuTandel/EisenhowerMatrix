import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Task } from 'src/app/models/task.model';

@Injectable({
  providedIn: 'root',
})
export class DataCommunicationsService {
  public editData$: Observable<any>;
  private editData: Subject<any>;

  public getDetails$: Observable<any>;
  private getDetails: Subject<any>;

  public isUpdated$: Observable<boolean>;
  private isUpdated: BehaviorSubject<boolean>;

  public searchTerm$: Observable<string>;
  private searchTerm: BehaviorSubject<string>;

  constructor() {
    this.editData$ = new Observable();
    this.editData = new Subject<any>();
    this.editData$ = this.editData.asObservable();

    this.getDetails$ = new Observable();
    this.getDetails = new Subject<any>();
    this.getDetails$ = this.getDetails.asObservable();

    this.isUpdated$ = new Observable();
    this.isUpdated = new BehaviorSubject<boolean>(false);
    this.isUpdated$ = this.isUpdated.asObservable();

    this.searchTerm$ = new Observable();
    this.searchTerm = new BehaviorSubject<string>('');
    this.searchTerm$ = this.searchTerm.asObservable();
  }

  getData(data: Task) {
    this.editData.next(data);
  }

  getTaskDetails(data: Task) {
    this.getDetails.next(data);
  }

  getTaskUpdated() {
    this.isUpdated.next(true);
  }

  setSearchTerm(term: string) {
    this.searchTerm.next(term);
  }
}
