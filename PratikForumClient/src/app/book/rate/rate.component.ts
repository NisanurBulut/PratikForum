import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
// child componentini
export class RateComponent implements OnInit {
  @Input() toplamPuan;
  @Input() kisiSayisi;
  @Output() puanDegistir = new EventEmitter<number>();
/**
 * toplamPuan: Kitap hakkında şu ana kadar
 * yapılmış puanların tutulduğu değişkendir.
 * Bu değişken bilgisi parent componentten gelecek.
 * Bu değişken bizim input değişkenimiz olacak.
 * Değişkeni tanımlarken değişkenin başına @Input() ekleyeceğiz.
 */

 /**
  * kisiSayisi: Kitabı oylayan toplam kişi sayısı için tanımlanan değişken.
  * Bu değişken bilgisi parent componentten gelecek.
  * Bu değişken bizim input değişkenimiz olacak.
  * Değişkeni tanımlarken değişkenin başına @Input() ekleyeceğiz.
  */

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
