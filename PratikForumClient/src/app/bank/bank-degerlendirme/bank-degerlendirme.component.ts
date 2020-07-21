import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BankService } from 'src/app/shared/bank.service';
import { Bank } from 'src/app/models/bank.model';

@Component({
  selector: 'app-bank-degerlendirme',
  templateUrl: './bank-degerlendirme.component.html',
  styleUrls: ['./bank-degerlendirme.component.css']
})
export class BankDegerlendirmeComponent implements OnInit, OnDestroy {
  private id: number;
  private routeSub: any;
  private req: any;
  private bank: any;

  prodIdSnapshot: number;
  constructor(private route: ActivatedRoute, private bs: BankService) {
alert(5);
   }

  ngOnInit() {
    alert(5);
    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.id;
      this.req = this.bs.getBankDetail(this.id).subscribe(data => {
        this.bank = data as Bank;
        console.log(this.bank);
      });
    });
  }
  ngOnDestroy() {
    this.routeSub.unsubscribe();
    this.req.unsubscribe();
  }
}
