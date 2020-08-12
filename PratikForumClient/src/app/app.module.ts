import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BankComponent } from './bank/bank.component';
import { UserComponent } from './user/user.component';
import { UserOperationsComponent } from './user/user-operations/user-operations.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactComponent } from './contacts/contact/contact.component';

import { DefaultModule } from './modules/default.module';
import { BankModule } from './modules/bank/bank.module';
import { BudgetModule } from './modules/budget/budget.module';
import { TaskModule } from './modules/task/task.module';
import { MaterialModule } from './modules/material/material.module';
import { ComponentModule } from './components/component/component.module';



@NgModule({
  declarations: [
    AppComponent,
    BankAccountComponent,
    HomeComponent,
    BankComponent,
    UserComponent,
    UserOperationsComponent,
    ContactComponent,
    ContactsComponent
  ],
  imports: [
    AppRoutingModule,
    BankModule,
    BrowserModule,
    BrowserAnimationsModule,
    BudgetModule,
    ComponentModule,
    DefaultModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    TaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
