import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-bank-puan',
  templateUrl: './bank-puan.component.html',
  styleUrls: ['./bank-puan.component.css']
})
export class BankPuanComponent implements OnInit {
  @Input() bankToplamPuan: number;
  @Input() bankPuanlamaSayisi: number;
  @Output() puanDegistir = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  /*** puanDegistir: Kullanıcının oy vermesini sağlayacak değişkendir.
 * Bu bilgi ile kullanıcının puan bilgisi alınacak
 * ve parent componente aktarılacak.
 * Bu değişken bizim output değişkenimiz olacak.
 * Değişkeni tanımlarken değişkenin başına @Output() ekleyeceğiz.
 * Output değişkeni “EventEmitter<>()” şeklinde tanımlanır.
 * Eğer bu değişkenin örneğin sayısal parametre alacaksa
 * “EventEmitter<number>()” şeklinde tanımlanır.
 */
  oyVer(puan: number) {
    this.puanDegistir.emit(puan);
  }
}
