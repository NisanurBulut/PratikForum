import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent } from 'src/app/task-pages/task-view/task-view.component';
import { NewListComponent } from 'src/app/task-pages/new-list/new-list.component';
import { NewTaskComponent } from 'src/app/task-pages/new-task/new-task.component';


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
