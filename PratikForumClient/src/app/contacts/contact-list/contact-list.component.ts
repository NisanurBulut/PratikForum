import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../../shared/contact.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogClose, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ContactComponent } from '../contact/contact.component';
import { DialogService } from 'src/app/shared/dialog.service';


@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private cs: ContactService,
              private mDialog: MatDialog,
              private ds: DialogService) { }
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'fullName', 'email', 'mobile', 'city', 'gender', 'isPermanent',
    'birthday', 'actions'];
  array = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;
  mConfig = new MatDialogConfig();

  ngOnInit(): void {
    this.mConfig.width = '60%';
    this.mConfig.autoFocus = true;
    this.mConfig.disableClose = true;
    this.onViewContactList();
  }
  onCreate(): void {
    // popup açılırken temizlenerek açılsın
    this.cs.initializeFormGroup();
    // burada html ayağa kalkacak
    // inject edilen matDialog çağrılmalı
    // html içeriğin popup içerisine yerleşmesi için EntryComponent olarak ilgili modulde tanımlanmalı
    // html'in ekranda düzgünce görünmesi için config yapılandırması olmalı
    this.mDialog.open(ContactComponent, this.mConfig);

  }
  onSearchClear(): void {
    this.searchKey = '';
    this.applyfilter();
  }
  applyfilter(): void {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }
  onEdit(dataRow) {
    this.cs.populateForm(dataRow);

    this.mDialog.open(ContactComponent, this.mConfig);
  }
  onDelete(id: number) {
    // if (confirm('Silmek istediğinizden emin misiniz ?')) {
    //   this.cs.deleteContact(id);
    // }
    // this.onViewContactList();
    this.ds.openConfirmDialog('Silmek istediğinizden emin misiniz ?')
      .afterClosed().suscribe(res => {
        console.log(res);
      });
  }
  onViewContactList() {
    this.cs.getContacts().subscribe(
      list => {
        (list as [] | any).map(item => {
          this.array.push(item);
        });
        this.listData = new MatTableDataSource(this.array);
        this.listData.sort = this.sort;
        this.listData.paginator = this.paginator;
      });
  }
}
