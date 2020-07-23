import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { HomeComponent } from './home/home.component';
import { BankComponent } from './bank/bank.component';
import { BankOperationsComponent } from './bank/bank-operations/bank-operations.component';
import { BankDegerlendirmeComponent } from './bank/bank-degerlendirme/bank-degerlendirme.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: 'bank',
        component: BankComponent,
        children: [
          { path: 'operations', component: BankOperationsComponent },
          { path: 'degerlendirme/:id', component: BankDegerlendirmeComponent }
        ]
      },
    // {
    //     path: 'bank',
    //     component: BankComponent
    // },
    // {
    //     path: 'bank/operations',
    //     component: BankOperationsComponent
    // },
    // {
    //     path: 'bank/degerlendirme/:id',
    //     component: BankDegerlendirmeComponent
    // },

    { path: 'bankAccount', component: BankAccountComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
