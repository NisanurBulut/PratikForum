import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { UserOperationsComponent } from './user/user-operations/user-operations.component';
import { MaterialConfirmDialogComponent } from './contacts/material-confirm-dialog/material-confirm-dialog.component';

import { AppRoutingModule } from './app-routing.module';
import { DefaultModule } from './modules/default.module';
import { BankModule } from './modules/bank/bank.module';
import { BudgetModule } from './modules/budget/budget.module';
import { TaskModule } from './modules/task/task.module';
import { SharedModule } from './modules/shared.module';
import { ContactModule } from './modules/contact/contact.module';
import { ComponentModule } from './components/component/component.module';

import { DialogService } from './shared/dialog.service';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    UserOperationsComponent,
    MaterialConfirmDialogComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    BudgetModule,
    ComponentModule,
    DefaultModule,
    SharedModule,
    BankModule,
    TaskModule,
    ContactModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
  entryComponents: [MaterialConfirmDialogComponent]
})
export class AppModule { }
