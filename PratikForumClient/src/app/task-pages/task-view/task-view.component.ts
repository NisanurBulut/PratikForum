import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/shared/task.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Task } from 'src/app/models/task.model';

@Component({
  selector: 'app-task-view',
  templateUrl: './task-view.component.html',
  styleUrls: ['./task-view.component.scss']
})
export class TaskViewComponent implements OnInit {
  lists: any;
  tasks: any;
  listId: number;
  constructor(private ts: TaskService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      if (params.listId !== undefined) {
        this.listId = +params.listId;
        this.ts.getTaskList(params.listId).subscribe((response: any[]) => {
          this.tasks = response;
          console.log(this.tasks);
        });
      }
    });
    this.ts.getTaskLists().subscribe((response: any[]) => {
      this.lists = response;
    });
  }
  completeTask(taskItem: Task) {
    this.ts.completeTask(taskItem.taskId).subscribe((response: any) => {
      taskItem.completed = true;
    });
  }
  deleteTaskLists() {
    this.ts.DeleteTaskList(this.listId).subscribe((response: any) => {
      //  this.lists.removeAt(this.lists.indexOf(this.listId));
      // ekran yenilenmeli
    });
  }
  deleteTask(taskItem: Task) {
    this.ts.DeleteTask(taskItem.taskId).subscribe((response: any) => {
      //  this.lists.removeAt(this.lists.indexOf(this.listId));
      // ekran yenilenmeli
    });
  }
}
