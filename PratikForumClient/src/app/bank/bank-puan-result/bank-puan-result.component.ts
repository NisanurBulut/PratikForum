import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bank-puan-result',
  templateUrl: './bank-puan-result.component.html',
  styleUrls: ['./bank-puan-result.component.css']
})
export class BankPuanResultComponent implements OnInit {

  constructor() { }
  @Input() bankaninPuanlari = [];
  ngOnInit() {
  }

}
