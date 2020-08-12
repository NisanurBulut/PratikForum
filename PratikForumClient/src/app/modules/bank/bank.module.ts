import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BankOperationsComponent } from '../../bank/bank-operations/bank-operations.component';
import { BankPuanComponent } from '../../bank/bank-puan/bank-puan.component';
import { BankCommentComponent } from '../../bank/bank-comment/bank-comment.component';
import { BankPuanResultComponent } from '../../bank/bank-puan-result/bank-puan-result.component';
import { BankDegerlendirmeComponent } from '../../bank/bank-degerlendirme/bank-degerlendirme.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    BankOperationsComponent,
    BankPuanComponent,
    BankCommentComponent,
    BankPuanResultComponent,
    BankDegerlendirmeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class BankModule { }
