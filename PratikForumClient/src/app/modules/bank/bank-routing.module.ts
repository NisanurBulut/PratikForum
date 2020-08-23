import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankOperationsComponent } from '../../bank/bank-operations/bank-operations.component';
import { BankDegerlendirmeComponent } from '../../bank/bank-degerlendirme/bank-degerlendirme.component';
import { BankAccountComponent } from '../../bank-account/bank-account.component';

const routes: Routes = [
    { path: 'bankAccount', component: BankAccountComponent },
    { path: 'bank/operations', component: BankOperationsComponent },
    { path: 'bank/degerlendirme/:id', component: BankDegerlendirmeComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class BankRoutingModule {
}
