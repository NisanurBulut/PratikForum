import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from 'src/app/shared/bank.service';
import { Bank } from 'src/app/models/bank.model';
import { Subscription } from 'rxjs';
import { BankPuan } from 'src/app/models/bankPuan.model';
import { ignoreElements } from 'rxjs/operators';

@Component({
  selector: 'app-bank-degerlendirme',
  templateUrl: './bank-degerlendirme.component.html',
  styleUrls: ['./bank-degerlendirme.component.css']
})
export class BankDegerlendirmeComponent implements OnInit, OnDestroy {
  private id: number;
  private routeSub: any;
  private puansub: Subscription;
  private req: any;
  yeniYorum: string;
  bankItem: Bank;
  public sonPuan: number;
  // bankaninPuanlari: banka puanlarının tutulduğu listedir(Array).
  // Bu bilgi “rate-result.component.ts” ye aktarılıp
  // “rate-result.component.html” de kullanılacak.


  prodIdSnapshot: number;
  constructor(private route: ActivatedRoute, private bs: BankService) {
  }

  ngOnInit() {
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.id;
    });
    this.getBankDetail();
    this.getBankPuanDetail();
  }
  getBankDetail() {
    this.req = this.bs.getBankDetail(this.id).subscribe(data => {
      this.bankItem = data as Bank;
    });
  }
  getBankPuanDetail() {
    this.puansub = this.bs.getBankPuanDetail(this.id).subscribe(data => {
      console.log('bankPuanDetay:', data);
      this.bankItem.bankaninPuanlari = data as [BankPuan];
      this.bankItem.puanlamaSayisi = this.bankItem.bankaninPuanlari.length;
    });
  }
  yorumEkle() {

  }

  puanla(puan: number) {
    // puan artışını göstermek için böyle bir kural belirledim.
    // kullanıcının kitabı puanlayıp bilgiyi “rate-result.component.ts” ye aktaracak
    this.bankItem.puan = ((this.bankItem.puan * 10) + puan) / 10;
    this.bankItem.bankaninPuanlari.map(y => {
      if (y.yildiz === puan) {
        console.log(y.puan);
        y.puan += puan;
        return y.puan;
      }
    });

    this.bankItem.puanlamaSayisi++;
    this.sonPuan = puan;
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
    this.puansub.unsubscribe();
  }
}
