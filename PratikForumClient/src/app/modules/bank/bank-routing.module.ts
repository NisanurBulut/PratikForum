import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BankComponent } from '../../bank/bank.component';
import { BankOperationsComponent } from '../../bank/bank-operations/bank-operations.component';
import { BankDegerlendirmeComponent } from '../../bank/bank-degerlendirme/bank-degerlendirme.component';
import { BankAccountComponent } from '../../bank-account/bank-account.component';

const routes: Routes = [
    {
        path: 'bank',
        component: BankComponent,
        children: [
            { path: 'operations', component: BankOperationsComponent },
            { path: 'degerlendirme/:id', component: BankDegerlendirmeComponent }
        ]
    },
    { path: 'bankAccount', component: BankAccountComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: []
})
export class BankRoutingModule {
}
