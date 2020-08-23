import { NgModule } from '@angular/core';
import { SimpleNotificationsModule } from 'angular2-notifications';

import {TaskViewComponent} from '../../task-pages/task-view/task-view.component';
import {NewListComponent} from '../../task-pages/new-list/new-list.component';
import {NewTaskComponent} from '../../task-pages/new-task/new-task.component';
import { SharedModule } from '../shared.module';
import { TaskRoutingModule } from '../../modules/task/task-routing.module';

@NgModule({
  declarations: [
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent
  ],
  imports: [
    SharedModule,
    SimpleNotificationsModule.forRoot(),
    TaskRoutingModule
  ]
})
export class TaskModule { }
