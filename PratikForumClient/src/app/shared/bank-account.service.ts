import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http: HttpClient) { }
  postBankAccount(formData: FormGroup) {
    return this.http.post(environment.apiBaseUrl + '/BankAccount', formData);
  }
  getBankAccountList() {
    return this.http.get(environment.apiBaseUrl + '/BankAccount');
  }
}
