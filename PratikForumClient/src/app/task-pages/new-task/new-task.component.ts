import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../shared/task.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.scss']
})
export class NewTaskComponent implements OnInit {

  constructor(private ts: TaskService, private route: ActivatedRoute, private router: Router) { }
  taskListId: number;
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.taskListId = params.listId;
    });
  }
  yeniGorevOlustur(descTask) {

    const taskItem = new Task();
    taskItem.tasklistId = +this.taskListId;
    taskItem.description = descTask;
    taskItem.taskId = 0;
    this.ts.postTask(taskItem).subscribe((response: any) => {
      this.router.navigate(['../'], { relativeTo: this.route });
    });
  }
}
