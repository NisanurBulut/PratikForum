import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';
import { map, catchError } from 'rxjs/operators';
import { Bank } from '../models/bank.model';
import { BankPuan } from '../models/bankPuan.model';

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
  getBankPuanDetail(id) {
    return this.http.get(environment.apiBaseUrl + '/Bank/getBankPuanDetail/' + id)
      .pipe(catchError(this.handleError));
  }
  deleteBank(id) {
    return this.http.delete(environment.apiBaseUrl + '/Bank/' + id)
      .pipe(catchError(this.handleError));
  }
  postBankPuan(formData: BankPuan) {
    console.log(formData);
    return this.http.post(environment.apiBaseUrl + '/Puans', formData)
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
