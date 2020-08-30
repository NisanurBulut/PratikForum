import { Component, OnInit, OnDestroy } from '@angular/core';
import { BankService } from '../../shared/bank.service';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { Bank } from '../../models';


@Component({
  selector: 'app-bank-operations',
  templateUrl: './bank-operations.component.html',
  styleUrls: ['./bank-operations.component.css']
})
export class BankOperationsComponent implements OnInit, OnDestroy {
  private req: any;
  private bankModel: Bank;
  bankForms: FormArray = this.fb.array([]);
  notification = null;
  constructor(private fb: FormBuilder, private bs: BankService) { }

  ngOnInit() {
    this.getBankList();
  }
  getBankList() {

    this.bankForms.clear();
    this.req = this.bs.getBankList().subscribe(rs => {
      if (rs === [] || (rs as []).length === 0) {
        this.addBank();
      } else {
        (rs as []).forEach((bank: any) => {
          console.log(bank);
          this.bankForms.push(this.fb.group({
            bankID: [bank.bankID, Validators.min(0)],
            bankName: [bank.bankName, Validators.required],
            Aciklama: [bank.aciklama, Validators.required]
          }));
        });
      }

    });
  }
  addBank() {
    this.bankForms.push(this.fb.group({
      bankID: [0],
      bankName: ['', Validators.required],
      Aciklama: ['', Validators.required]
    }));
  }

  deleteBank(bankID, i: number) {
    if (bankID === 0) {
      this.bankForms.removeAt(i);
    } else if (confirm('Bu işlemi yapmak istediğinizden emin misiniz ?')) {
      this.bs.deleteBank(bankID).subscribe(
        (res: any) => {
          this.bankForms.removeAt(i);
          this.showNotification('delete');
        }
      );
    }
  }
  recordSubmit(fg: FormGroup) {
    this.bankModel = new Bank();
    this.bankModel.bankID = fg.value.bankID;
    this.bankModel.aciklama = fg.value.Aciklama;
    this.bankModel.bankName = fg.value.bankName;
    this.bankModel.puan = 0;
    console.log();
    if (fg.get('bankID').value === 0) {
      this.bs.postBank(this.bankModel).subscribe(
        (res: any) => {
          fg.patchValue({ bankID: res.bankID });
          this.getBankList();
          this.showNotification('insert');
        }
      );
    } else {
      console.log(fg.value);
      this.bs.putBank(this.bankModel).subscribe(
        (res: any) => {
          this.getBankList();
          this.showNotification('update');
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
  ngOnDestroy() {
    this.req.unsubscribe();
  }
}
