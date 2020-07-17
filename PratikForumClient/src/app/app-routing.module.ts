import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { HomeComponent } from './home/home.component';
import { BankComponent } from './bank/bank.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'bankAccount', component: BankAccountComponent },
    { path: 'bank', component: BankComponent },
    { path: 'user', component: BankComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
