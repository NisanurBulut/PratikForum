export class Bank {
    public BankID: number;
    private Aciklama: string;
    private BankName: string;
    private Puan: number;
    /**
     *
     */
    constructor(bankId: number, aciklama: string, bankName: string, puan: number) {
        this.BankID = bankId;
        this.BankName = bankName;
        this.Aciklama = aciklama;
        this.Puan = puan;
    }
}
