import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Bank, BankYorum } from '../models';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  constructor(private http: HttpClient) { }
  getBankList() {
    return this.http.get(environment.apiBaseUrl + '/Bank')
      .pipe(catchError(this.handleError));
  }
  getBankDetail(id) {
    return this.http.get(environment.apiBaseUrl + '/Bank/' + id)
      .pipe(catchError(this.handleError));
  }
  getBankYorumDetail(id) {
    return this.http.get(environment.apiBaseUrl + '/BankYorum/' + id)
      .pipe(catchError(this.handleError));
  }
  getBankPuanDetail(id) {
    return this.http.get(environment.apiBaseUrl + '/BankYorum/BankPuan/' + id)
      .pipe(catchError(this.handleError));
  }
  deleteBank(id) {
    return this.http.delete(environment.apiBaseUrl + '/Bank/' + id)
      .pipe(catchError(this.handleError));
  }
  postBankYorum(formData: BankYorum) {
    console.log(formData);
    return this.http.post(environment.apiBaseUrl + '/BankYorum', formData)
      .pipe(catchError(this.handleError));
  }
  postBank(formData: Bank) {
    return this.http.post(environment.apiBaseUrl + '/Bank', formData)
      .pipe(catchError(this.handleError));
  }
  putBank(formData: Bank) {
    return this.http.put(environment.apiBaseUrl + '/Bank/' + formData.bankID, formData)
      .pipe(catchError(this.handleError));
  }
  private handleError(error: any, caught: any): any {
    console.log(error);
  }
}
