import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent } from '../../task-pages';


const routes: Routes = [
    { path: 'tasks', component: TaskViewComponent },
    { path: 'new-list', component: NewListComponent },
    { path: 'lists/:listId/new-task', component: NewTaskComponent },
    { path: 'lists/:listId', component: TaskViewComponent },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TaskRoutingModule { }
