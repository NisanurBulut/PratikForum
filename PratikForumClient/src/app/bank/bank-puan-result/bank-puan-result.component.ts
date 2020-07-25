import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bank-puan-result',
  templateUrl: './bank-puan-result.component.html',
  styleUrls: ['./bank-puan-result.component.css']
})
export class BankPuanResultComponent implements OnInit {

  constructor() {console.log('BankPuanResultComponent constructor'); }
  @Input() bankaninPuanlari = [];
  ngOnInit() {
    console.log('bank puan result ngOnInit');
  }

}
