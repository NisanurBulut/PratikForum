import { NgModule } from '@angular/core';

import {
      BudgetMainComponent,
      AddItemFormComponent,
      BudgetItemListComponent,
      BudgetItemCardComponent,
      EditItemModalComponent
} from '../../budget-main';

import { SharedModule } from '../shared.module';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    BudgetMainComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EditItemModalComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild([{ path: 'budgetMain', component: BudgetMainComponent }])
  ],
  entryComponents: [EditItemModalComponent]
})
export class BudgetModule { }
