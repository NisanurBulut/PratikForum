import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserOperationsComponent } from './user/user-operations/user-operations.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
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
