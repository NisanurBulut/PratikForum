import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from 'src/app/shared/bank.service';
import { Bank } from 'src/app/models/bank.model';
import { Subscription } from 'rxjs';
import { BankYorum } from 'src/app/models/bankYorum.model';

@Component({
  selector: 'app-bank-degerlendirme',
  templateUrl: './bank-degerlendirme.component.html',
  styleUrls: ['./bank-degerlendirme.component.css']
})
export class BankDegerlendirmeComponent implements OnInit, OnDestroy {
  private id: number;
  private routeSub: any;
  private yorumsub: Subscription;
  private yorumPostSub: Subscription;
  private req: any;
  yeniYorum: string;
  bankItem: Bank = new Bank();
  puanDetay: [
    { yildiz: 5, puan: 10 },
    { yildiz: 4, puan: 55 },
    { yildiz: 3, puan: 50 },
    { yildiz: 2, puan: 40 },
    { yildiz: 1, puan: 15 }];
  // bankaninPuanlari: banka puanlarının tutulduğu listedir(Array).
  // Bu bilgi “rate-result.component.ts” ye aktarılıp
  // “rate-result.component.html” de kullanılacak.


  prodIdSnapshot: number;
  constructor(private route: ActivatedRoute, private bs: BankService) {

    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.id;

      this.getBankDetail();
      this.getBankYorumDetail();
    });
  }

  ngOnInit() {
  }
  getBankDetail() {
    this.req = this.bs.getBankDetail(this.id).subscribe(data => {
      this.bankItem = data as Bank;
    });
  }
  getBankYorumDetail() {
    this.yorumsub = this.bs.getBankYorumDetail(this.id).subscribe(data => {
      console.log('bankPuanDetay:', data);
      this.bankItem.bankaninYorumlari = data as [BankYorum];
      this.bankItem.puanlamaSayisi = this.bankItem.bankaninYorumlari.length;
    });
  }

  degerlendir() {
    //  kullanıcıların yorum yapmasını sağlayacak
    // ve bu bilgiyi “comments.component.ts” ye aktaracak
    const ydegerlendirme = new BankYorum();
    ydegerlendirme.BankId = this.bankItem.bankID;
    ydegerlendirme.Yildiz = this.bankItem.puan;
    ydegerlendirme.YorumId = 0;
    ydegerlendirme.Yorum = this.yeniYorum;
    // this.bankItem.bankaninPuanlari.push(bYorum);
    this.bankItem.puanlamaSayisi++;
    this.yorumPostSub = this.bs.postBankYorum(ydegerlendirme)
      .subscribe(data => {
        // ekran yeniden dolmalı
        this.getBankYorumDetail();
      });
  }

  puanla(puan: number) {
    // puan artışını göstermek için böyle bir kural belirledim.
    // kullanıcının kitabı puanlayıp bilgiyi “rate-result.component.ts” ye aktaracak
    this.bankItem.puan = ((this.bankItem.puan * 10) + puan) / 10;
    console.log(this.bankItem.puan);
    this.puanDetay.map(y => {
      if (y.yildiz === puan) {
        this.bankItem.puan += puan;
        this.bankItem.puanlamaSayisi++;
        return this.bankItem.puan;

        // y.bankPuan += puan;
        // console.log(y.bankPuan);
        // return y.bankPuan;
        return y.yildiz;
      }
    });

    this.bankItem.puanlamaSayisi++;
    this.bankItem.puan = puan;
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
    this.yorumPostSub.unsubscribe();
    this.yorumsub.unsubscribe();
  }
}
