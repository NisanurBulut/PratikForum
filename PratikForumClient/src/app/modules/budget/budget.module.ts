import { NgModule } from '@angular/core';

import {BudgetMainComponent} from '../../budget-main/budget-main.component';
import {AddItemFormComponent} from '../../budget-main/add-item-form/add-item-form.component';
import {BudgetItemListComponent} from '../../budget-main/budget-item-list/budget-item-list.component';
import {BudgetItemCardComponent} from '../../budget-main/budget-item-list/budget-item-card/budget-item-card.component';
import {EditItemModalComponent} from '../../budget-main/edit-item-modal/edit-item-modal.component';
import { SharedModule } from '../shared.module';
@NgModule({
  declarations: [
    BudgetMainComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EditItemModalComponent,
  ],
  imports: [
    SharedModule
  ],
  entryComponents: [EditItemModalComponent]
})
export class BudgetModule { }
