import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { HomeComponent } from './home/home.component';
import { BankComponent } from './bank/bank.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { UserOperationsComponent } from './user/user-operations/user-operations.component';
import { BankOperationsComponent } from './bank/bank-operations/bank-operations.component';
import { BankDegerlendirmeComponent } from './bank/bank-degerlendirme/bank-degerlendirme.component';
import { BudgetMainComponent } from './budget-main/budget-main.component';
import { TaskViewComponent } from './task-pages/task-view/task-view.component';
import { NewListComponent } from './task-pages/new-list/new-list.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'taks', component: TaskViewComponent },
    { path: ':new-list', component: NewListComponent },
    { path: 'lists/:listId', component: TaskViewComponent },
    {
        path: 'bank',
        component: BankComponent,
        children: [
            { path: 'operations', component: BankOperationsComponent },
            { path: 'degerlendirme/:id', component: BankDegerlendirmeComponent }
        ]
    },
    {
        path: 'user', component: UserComponent,
        children: [
            {
                path: 'registration', component: RegistrationComponent, pathMatch: 'full',
            },
            {
                path: 'login', component: LoginComponent, pathMatch: 'full',
            },
            {
                path: 'operations', component: UserOperationsComponent, pathMatch: 'full',
            }
        ]
    },
    { path: 'bankAccount', component: BankAccountComponent },
    { path: 'budgetMain', component: BudgetMainComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
