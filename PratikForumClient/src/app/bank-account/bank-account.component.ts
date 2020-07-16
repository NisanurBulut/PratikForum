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
  notification = null;
  constructor(private fb: FormBuilder, private bs: BankService, private bas: BankAccountService) { }

  ngOnInit() {
    this.bs.getBankList()
      .subscribe(resp => this.bankList = resp as []);
    this.GetBankAccountList();
  }
  GetBankAccountList() {
    this.bankAccountForms.clear();

    this.bas.getBankAccountList().subscribe(res => {
      console.log(res);
      if (res === [] || (res as []).length === 0) {
        this.AddBankAccountForm();
      } else {
        (res as []).forEach((bankAccount: any) => {
          this.bankAccountForms.push(this.fb.group({
            BankID: [bankAccount.bankID, Validators.min(1)],
            BankAccountID: [bankAccount.bankAccountID],
            AccountNumber: [bankAccount.accountNumber, Validators.required],
            AccountHolder: [bankAccount.accountHolder, Validators.required],
            IFSC: [bankAccount.ifsc, Validators.required]
          }));
        });
      }
    });
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
    if (fg.get('BankAccountID').value === 0) {
      this.bas.postBankAccount(fg.value).subscribe(
        (res: any) => {
          fg.patchValue({ bankAccountID: res.bankAccountID });
          this.GetBankAccountList();
          this.showNotification('insert');
        }
      );
    } else {
      this.bas.putBankAccount(fg.value).subscribe(
        (res: any) => {
          this.GetBankAccountList();
          this.showNotification('update');
        }
      );
    }
  }
  deleteBankAccount(BankAccountID, i: number) {
    if (BankAccountID === 0) {
      this.bankAccountForms.removeAt(i);
    } else if (confirm('Bu işlemi yapmak istediğinizden emin misiniz ?')) {
      this.bas.deleteBankAccount(BankAccountID).subscribe(
        (res: any) => {
          this.bankAccountForms.removeAt(i);
          this.showNotification('delete');
        }
      );
    }
  }
  showNotification(category) {
    switch (category) {
      case 'insert':
        this.notification = { class: 'text-success', message: 'Başarıyla kaydedildi.' };
        break;
      case 'update':
        this.notification = { class: 'text-warning', message: 'Başarıyla güncellendi.' };
        break;
      case 'delete':
        this.notification = { class: 'text-danger', message: 'Başarıyla silindi.' };
        break;
      default:
        break;
    }
    setTimeout(() => {
      this.notification = null;
    }, (3000));
  }
}
