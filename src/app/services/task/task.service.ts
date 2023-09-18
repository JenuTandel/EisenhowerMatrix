import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public baseUrl: string;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseurl;
  }

  /**
   * @author Jinal Tandel
   * @description Add or post the task to the database
   * @param task
   * @returns observable
   */
  addTask(task: Task): Observable<any> {
    return this.http.post(`${this.baseUrl}ToDo`, task);
  }

  // Get all the task
  getAllTask(): Observable<any> {
    return this.http.get(`${this.baseUrl}ToDo`);
  }

  //Get the particular task by id
  getTaskById(taskId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}ToDo/${taskId}`);
  }

  //Update the task details
  updateTask(taskData: Task): Observable<any> {
    console.log(taskData);

    return this.http.put(`${this.baseUrl}ToDo/${taskData.id}`, taskData);
  }

  //Delete the task
  deleteTask(taskId: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}ToDo/${taskId}`);
  }

  //Get Task Status
  getTaskStatus():Observable<any>{
    return this.http.get(`${this.baseUrl}TaskStatus`)
  }
}
