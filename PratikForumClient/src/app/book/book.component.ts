import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  sonPuan = 0;
  yeniYorum = '';
/*
Adı ve açıklama :Bu iki değişken “book.component.ts” ve
 “book.component.html” dosyalarında kullanılacak
 herhangi bir child componentte kullanılmayacak
*/
/***puan, kisiSayisi: Bu iki değişken
  “rate.component.ts” ye aktarılıp
  “rate.component.html” ve“rate.component.ts” de kullanılacak.
 */
/**
 * puanDetay: Kitap puanlarının tutulduğu listedir(Array).
 * Bu bilgi “rate-result.component.ts” ye aktarılıp
 * “rate-result.component.html” de kullanılacak.
 */
/**
 * yorumlar: Bu değişken “comments.component.ts” ye aktarılıp
 * “comments.component.html” de kullanılacak.
 */
  kitap = {
    adi: 'Atatürk / Bir Milletin Yeniden Doğuşu - Lord Kinross',
    aciklama: '"Bu kitap çağdaş Türkiye\'yi yaratan ve tarihin akışını değiştiren büyük önder hakkındaki birçok ' +
      'bilgi eksiğini giderecek bir araştırma ürünüdür. "İşte, şimdiye kadar yayınlanmış en ' +
      'kapsamlı \'Atatürk\' incelemesi...\'Atatürk büyüleyici ve gizemli bir kişilik olarak belleklerde kalıyor." -The Times-',
    puan: 4,
    puanDetay: [
      {yildiz: 5, puan: 80},
      {yildiz: 4, puan: 55},
      {yildiz: 3, puan: 50},
      {yildiz: 2, puan: 40},
      {yildiz: 1, puan: 15}],
    kisiSayisi: 125014,
    yorumlar: [{
      yildiz: 5,
      yorum: 'Kitabı 2 kez okudum hiç sıkılmadan. ' +
        'Hayatında hiç kitap okumayan insana bile bu alışkanlığı edindirecek bir kitap. ' +
        '1966 yılında ilk basım tarihi, insanı o zamana götürüyor. ' +
        'Kitap sonunda çelişki yaşadığım yerler oldu fakat bu beni dahada araştırmaya ' +
        'yöneltiği için cevaplarını buldum. ' +
        'Bu kitaptan sonra Halide Edip ADIVAR Türk\'ün Ateşle İmtihanı\'nı ' +
        'zaten kendiliğinizden okuma gereksinimi duyacaksınız.'
    }]
  };

  constructor() {
  }

  yorumEkle() {
    //  kullanıcıların yorum yapmasını sağlayacak
    // ve bu bilgiyi “comments.component.ts” ye aktaracak
    this.kitap.yorumlar.push({yildiz: this.sonPuan, yorum: this.yeniYorum});
    console.log(this.kitap.yorumlar);
    this.kitap.kisiSayisi++;
  }

  puanla(puan: number) {
    // puan artışını göstermek için böyle bir kural belirledim.
    //kullanıcının kitabı puanlayıp bilgiyi “rate-result.component.ts” ye aktaracak
    this.kitap.puan = ((this.kitap.puan * 10) + puan) / 10;
    this.kitap.puanDetay.map(y => {
      if (y.yildiz === puan) {
        console.log(y.puan);
        y.puan += puan;
        return y.puan;
      }
    });

    this.kitap.kisiSayisi++;
    this.sonPuan = puan;
  }

  ngOnInit() {
  }
}
