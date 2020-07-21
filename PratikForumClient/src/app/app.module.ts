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
import { BankOperationsComponent } from './bank/bank-operations/bank-operations.component';
import { BankPuanComponent } from './bank/bank-puan/bank-puan.component';
import { BankCommentComponent } from './bank/bank-comment/bank-comment.component';
import { BankPuanResultComponent } from './bank/bank-puan-result/bank-puan-result.component';
import { BankDegerlendirmeComponent } from './bank/bank-degerlendirme/bank-degerlendirme.component';


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
    RateResultComponent,
    BankOperationsComponent,
    BankPuanComponent,
    BankCommentComponent,
    BankPuanResultComponent,
    BankDegerlendirmeComponent
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
