import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatSidenavModule } from '@angular/material';
import { SimpleNotificationsModule } from 'angular2-notifications';

import { AppComponent } from './app.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BankComponent } from './bank/bank.component';
import { UserComponent } from './user/user.component';
import { UserOperationsComponent } from './user/user-operations/user-operations.component';



import { TaskViewComponent } from './task-pages/task-view/task-view.component';
import { NewListComponent } from './task-pages/new-list/new-list.component';
import { NewTaskComponent } from './task-pages/new-task/new-task.component';
import { DefaultModule } from './modules/default.module';
import {BankModule} from './modules/bank/bank.module';
import {BudgetModule} from './modules/budget/budget.module';
import { ComponentModule } from './components/component/component.module';


@NgModule({
  declarations: [
    AppComponent,
    BankAccountComponent,
    HomeComponent,
    BankComponent,
    UserComponent,
    UserOperationsComponent,


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
    MatDialogModule,
    DefaultModule,
    BankModule,
    BudgetModule,
    ComponentModule,
    MatSidenavModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
