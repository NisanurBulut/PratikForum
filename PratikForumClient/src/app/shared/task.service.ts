import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TaskList } from '../models/taskList.model';
import { Task } from '../models/task.model';
@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  postTaskList(newItem: TaskList) {
    return this.http.post(environment.apiBaseUrl + '/TaskLists/PostTaskList/', newItem);
  }
  getTaskLists() {
    return this.http.get(environment.apiBaseUrl + '/TaskLists/GetTaskList');
  }
  getTaskList(id: number) {
    return this.http.get(environment.apiBaseUrl + '/TaskLists/GetTaskItems/' + id);
  }
  postTask(newItem: Task) {
    return this.http.post(environment.apiBaseUrl + '/TaskLists/PostTask/', newItem);
  }
  completeTask(id: number) {
    return this.http.get(environment.apiBaseUrl + '/TaskLists/CompleteTask/' + id);
  }
  DeleteTaskList(id: number) {
    return this.http.delete(environment.apiBaseUrl + '/TaskLists/DeleteTaskList/' + id);
  }
  DeleteTask(id: number) {
    return this.http.delete(environment.apiBaseUrl + '/TaskLists/DeleteTask/' + id);
  }
}
