import * as core from '@angular/core';
import { TaskService } from 'src/app/shared/task.service';
import { TaskList } from 'src/app/models/taskList.model';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastService } from 'src/app/shared/toast.service';

@core.Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss']
})
export class NewListComponent implements core.OnInit {

  constructor(private ts: TaskService, private tos: ToastService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }
  yeniListeOlustur(title: string) {
    const task = new TaskList();
    task.TaskListId = 0;
    task.Title = title;
    this.ts.postTaskList(task).subscribe((response: any) => {
      this.tos.success('Başarılı', 'Yeni görev listesi oluşturuldu.');
      this.router.navigate(['/tasks'], { relativeTo: this.route });
    });
  }

}
