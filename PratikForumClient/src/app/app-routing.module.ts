import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { HomeComponent } from './home/home.component';
import { BankComponent } from './bank/bank.component';
import { UserComponent } from './user/user.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { LoginComponent } from './user/login/login.component';
import { UserOperationsComponent } from './user/user-operations/user-operations.component';
import { BookComponent } from './book/book.component';
import { BankOperationsComponent } from './bank/bank-operations/bank-operations.component';
import { BankPuanComponent } from './bank/bank-puan/bank-puan.component';
import { BankDegerlendirmeComponent } from './bank/bank-degerlendirme/bank-degerlendirme.component';
import { BankCommentComponent } from './bank/bank-comment/bank-comment.component';


const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'bank/operations',
        component: BankOperationsComponent
    },
    {
        path: 'bank/degerlendirme/:id',
        component: BankDegerlendirmeComponent
    },
    { path: 'book', component: BookComponent },
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
    { path: 'bankAccount', component: BankAccountComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
