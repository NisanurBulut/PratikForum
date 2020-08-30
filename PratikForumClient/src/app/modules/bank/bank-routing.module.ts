import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {
    BankOperationsComponent,
    BankDegerlendirmeComponent,
    BankAccountComponent } from '../../bank';

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
