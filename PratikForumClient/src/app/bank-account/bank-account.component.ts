import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { BankService } from '../shared/bank.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

  bankAccountForms: FormArray = this.fb.array([]);
  bankList = [];
  constructor(private fb: FormBuilder, private bs: BankService) { }

  ngOnInit() {
    this.bs.getBankList()
      .subscribe(resp => this.bankList = resp as []);
    this.AddBankAccountForm();
  }
  AddBankAccountForm() {
    this.bankAccountForms.push(this.fb.group({
      bankId: [0],
      bankAccountId: [0],
      accountNumber: [''],
      accountHolder: [''],
      IFSC: ['']
    }));
  }
}
