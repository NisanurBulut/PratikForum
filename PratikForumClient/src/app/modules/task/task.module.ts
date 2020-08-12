import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SimpleNotificationsModule } from 'angular2-notifications';

import {TaskViewComponent} from '../../task-pages/task-view/task-view.component';
import {NewListComponent} from '../../task-pages/new-list/new-list.component';
import {NewTaskComponent} from '../../task-pages/new-task/new-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SimpleNotificationsModule.forRoot()
  ]
})
export class TaskModule { }
