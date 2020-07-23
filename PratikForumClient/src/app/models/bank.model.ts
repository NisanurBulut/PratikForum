import { BankYorum } from './bankYorum.model';
import { PuanDetay } from './puanDetay.model';

export class Bank {
    public bankID: number;
    public aciklama: string;
    public bankName: string;
    public puan: number;
    public yildiz: number;
    public imagePath:string;
    public puanlamaSayisi: number;
    public bankaninYorumlari: BankYorum[] = [];
    public bankaninPuanlari: PuanDetay[] = [];
    constructor() {}
    // constructor(bankId: number, aciklama: string, bankName: string, puan: number) {
    //     this.bankID = bankId;
    //     this.bankName = bankName;
    //     this.aciklama = aciklama;
    //     this.puan = puan;
    // }
}
