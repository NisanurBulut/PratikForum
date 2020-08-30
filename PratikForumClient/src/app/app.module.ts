import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserComponent, UserOperationsComponent } from './user';
import { MaterialConfirmDialogComponent } from './contacts';

import { AppRoutingModule } from './app-routing.module';
import {  DefaultModule,
          BankModule,
          BudgetModule,
          TaskModule,
          SharedModule,
          ContactModule } from './modules';

import { ComponentModule } from './components';

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
