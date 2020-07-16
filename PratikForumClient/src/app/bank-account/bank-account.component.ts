import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { BankService } from '../shared/bank.service';
import { BankAccountService } from '../shared/bank-account.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  bankAccountForms: FormArray = this.fb.array([]);
  bankList = [];
  constructor(private fb: FormBuilder, private bs: BankService, private bas: BankAccountService) { }

  ngOnInit() {
    this.bs.getBankList()
      .subscribe(resp => this.bankList = resp as []);
    this.AddBankAccountForm();
  }
  AddBankAccountForm() {
    this.bankAccountForms.push(this.fb.group({
      BankID: [0, Validators.min(1)],
      BankAccountID: [0],
      AccountNumber: ['', Validators.required],
      AccountHolder: ['', Validators.required],
      IFSC: ['', Validators.required]
    }));
  }
  recordSubmit(fg: FormGroup) {
    console.log(fg.value);
    this.bas.postBankAccount(fg.value).subscribe(
      (res: any) => {
        fg.patchValue({ bankAccountID: res.bankAccountID });
      }
    );
  }
}
