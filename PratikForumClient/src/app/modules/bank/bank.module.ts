import { NgModule } from '@angular/core';
import {
  BankOperationsComponent,
  BankPuanComponent,
  BankCommentComponent,
  BankPuanResultComponent,
  BankDegerlendirmeComponent,
  BankAccountComponent } from '../../bank/';
import { SharedModule } from '../shared.module';
import { BankRoutingModule } from '../../modules';
import { MaterialConfirmDialogComponent } from '../../contacts';


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
