import { BankPuan } from './bankPuan.model';

export class Bank {
    public bankID: number;
    public aciklama: string;
    public bankName: string;
    public puan: number;
    public puanlamaSayisi: number;
    public bankaninPuanlari: [BankPuan];
    constructor(bankId: number, aciklama: string, bankName: string, puan: number) {
        this.bankID = bankId;
        this.bankName = bankName;
        this.aciklama = aciklama;
        this.puan = puan;
    }
}
