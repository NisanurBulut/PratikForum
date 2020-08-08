import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BankComponent } from './bank/bank.component';
import { UserComponent } from './user/user.component';
import { UserOperationsComponent } from './user/user-operations/user-operations.component';
import { BankOperationsComponent } from './bank/bank-operations/bank-operations.component';
import { BankPuanComponent } from './bank/bank-puan/bank-puan.component';
import { BankCommentComponent } from './bank/bank-comment/bank-comment.component';
import { BankPuanResultComponent } from './bank/bank-puan-result/bank-puan-result.component';
import { BankDegerlendirmeComponent } from './bank/bank-degerlendirme/bank-degerlendirme.component';
import { BudgetMainComponent } from './budget-main/budget-main.component';
import { AddItemFormComponent } from './budget-main/add-item-form/add-item-form.component';
import { BudgetItemListComponent } from './budget-main/budget-item-list/budget-item-list.component';
import { BudgetItemCardComponent } from './budget-main/budget-item-list/budget-item-card/budget-item-card.component';
import { EditItemModalComponent } from './budget-main/edit-item-modal/edit-item-modal.component';

import { TaskViewComponent } from './task-pages/task-view/task-view.component';
import { NewListComponent } from './task-pages/new-list/new-list.component';
import { NewTaskComponent } from './task-pages/new-task/new-task.component';


@NgModule({
  declarations: [
    AppComponent,
    BankAccountComponent,
    HeaderComponent,
    HomeComponent,
    BankComponent,
    UserComponent,
    UserOperationsComponent,
    BankOperationsComponent,
    BankPuanComponent,
    BankCommentComponent,
    BankPuanResultComponent,
    BankDegerlendirmeComponent,
    BudgetMainComponent,
    AddItemFormComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    EditItemModalComponent,
    TaskViewComponent,
    NewListComponent,
    NewTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  entryComponents: [EditItemModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
