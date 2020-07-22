import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from 'src/app/shared/bank.service';
import { Bank } from 'src/app/models/bank.model';
import { Subscription } from 'rxjs';
import { BankPuan } from 'src/app/models/bankPuan.model';
import { Yorum } from 'src/app/models/yorum.model';
@Component({
  selector: 'app-bank-degerlendirme',
  templateUrl: './bank-degerlendirme.component.html',
  styleUrls: ['./bank-degerlendirme.component.css']
})
export class BankDegerlendirmeComponent implements OnInit, OnDestroy {
  private id: number;
  private routeSub: any;
  private puansub: Subscription;
  private puanPostSub: Subscription;
  private req: any;
  yeniYorum: string;
  bankItem: Bank;
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
  yorumYap() {
    //  kullanıcıların yorum yapmasını sağlayacak
    // ve bu bilgiyi “comments.component.ts” ye aktaracak
    const bYorum = new Yorum();
    bYorum.BankId = this.bankItem.bankID;
    bYorum.BankYorum = this.yeniYorum;
    bYorum.YorumId = 0;
    // this.bankItem.bankaninPuanlari.push(bYorum);
    this.bankItem.puanlamaSayisi++;
    this.bs.postBankYorum(bYorum);
    // ekran yeniden dolmalı
  }

  puanla(puan: number) {
    // puan artışını göstermek için böyle bir kural belirledim.
    // kullanıcının kitabı puanlayıp bilgiyi “rate-result.component.ts” ye aktaracak
    this.bankItem.puan = ((this.bankItem.puan * 10) + puan) / 10;
    this.bankItem.bankaninPuanlari.map(y => {
      if (y.yildiz === puan) {
        y.bankPuan += puan;
        console.log(y.bankPuan);
        return y.bankPuan;
      }
    });

    this.bankItem.puanlamaSayisi++;
    this.bankItem.puan = puan;
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
    this.puansub.unsubscribe();
  }
}
