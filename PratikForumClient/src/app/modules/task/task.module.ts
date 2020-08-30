import { NgModule } from '@angular/core';
import { SimpleNotificationsModule } from 'angular2-notifications';

import {TaskViewComponent, NewListComponent, NewTaskComponent} from '../../task-pages';
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
