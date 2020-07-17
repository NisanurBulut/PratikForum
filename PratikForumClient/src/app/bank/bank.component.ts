import { Component, OnInit, OnDestroy } from '@angular/core';
import { BankService } from '../shared/bank.service';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit, OnDestroy {
  private req: any;
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
          this.bankForms.push(this.fb.group({
            bankID: [bank.bankID, Validators.min(0)],
            bankName: [bank.bankName, Validators.required]
          }));
        });
      }

    });
  }
  addBank() {
    this.bankForms.push(this.fb.group({
      bankID: [0],
      bankName: ['', Validators.required]
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
    if (fg.get('bankID').value === 0) {
      this.bs.postBank(fg.value).subscribe(
        (res: any) => {
          fg.patchValue({ bankID: res.bankID });
          this.getBankList();
          this.showNotification('insert');
        }
      );
    } else {
      console.log(fg.value);
      this.bs.putBank(fg.value).subscribe(
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
