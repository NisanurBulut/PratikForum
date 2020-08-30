import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent, UserOperationsComponent } from './user';
import { DashboardComponent } from './dashboard/dashboard.component';
const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'user', component: UserComponent,
        children: [
            {
                path: 'operations', component: UserOperationsComponent, pathMatch: 'full',
            }
        ]
    }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
