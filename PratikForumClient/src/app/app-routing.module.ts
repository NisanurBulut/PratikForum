import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { HomeComponent } from './home/home.component';
import { BankComponent } from './bank/bank.component';
import { UserComponent } from './user/user.component';
import { UserOperationsComponent } from './user/user-operations/user-operations.component';
import { BankOperationsComponent } from './bank/bank-operations/bank-operations.component';
import { BankDegerlendirmeComponent } from './bank/bank-degerlendirme/bank-degerlendirme.component';
import { BudgetMainComponent } from './budget-main/budget-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactsComponent } from './contacts/contacts.component';
const routes: Routes = [
    { path: '', component: HomeComponent, },
    { path: 'contacts', component: ContactsComponent, },
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'user', component: UserComponent,
        children: [
            {
                path: 'operations', component: UserOperationsComponent, pathMatch: 'full',
            }
        ]
    },
    { path: 'budgetMain', component: BudgetMainComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
