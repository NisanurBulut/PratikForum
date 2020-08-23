import { NgModule } from '@angular/core';
import { BankOperationsComponent } from '../../bank/bank-operations/bank-operations.component';
import { BankPuanComponent } from '../../bank/bank-puan/bank-puan.component';
import { BankCommentComponent } from '../../bank/bank-comment/bank-comment.component';
import { BankPuanResultComponent } from '../../bank/bank-puan-result/bank-puan-result.component';
import { BankDegerlendirmeComponent } from '../../bank/bank-degerlendirme/bank-degerlendirme.component';
import { SharedModule } from '../shared.module';
import { BankRoutingModule } from '../bank/bank-routing.module';
import { MaterialConfirmDialogComponent } from '../../contacts/material-confirm-dialog/material-confirm-dialog.component';
import { BankAccountComponent } from 'src/app/bank-account/bank-account.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BankOperationsComponent,
    BankPuanComponent,
    BankCommentComponent,
    BankPuanResultComponent,
    BankDegerlendirmeComponent,
    BankAccountComponent
  ],
  imports: [
    SharedModule,
    BankRoutingModule
  ],
  exports: [
    BankOperationsComponent,
    BankPuanComponent,
    BankCommentComponent,
    BankPuanResultComponent,
    BankDegerlendirmeComponent,
    BankAccountComponent
  ],
  entryComponents: [MaterialConfirmDialogComponent]
})
export class BankModule { }
