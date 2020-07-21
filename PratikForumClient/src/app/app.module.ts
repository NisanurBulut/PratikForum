import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BankAccountComponent } from './bank-account/bank-account.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { BankComponent } from './bank/bank.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './user/login/login.component';
import { RegistrationComponent } from './user/registration/registration.component';
import { UserOperationsComponent } from './user/user-operations/user-operations.component';
import { BookComponent } from './book/book.component';
import { CommentComponent } from './book/comment/comment.component';
import { RateComponent } from './book/rate/rate.component';
import { RateResultComponent } from './book/rate-result/rate-result.component';


@NgModule({
  declarations: [
    AppComponent,
    BankAccountComponent,
    HeaderComponent,
    HomeComponent,
    BankComponent,
    UserComponent,
    LoginComponent,
    RegistrationComponent,
    UserOperationsComponent,
    BookComponent,
    CommentComponent,
    RateComponent,
    RateResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
