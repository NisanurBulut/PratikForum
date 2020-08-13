import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../../shared/contact.service';
import { MatTableDataSource, MatSort, MatPaginator, MatDialog, MatDialogClose, MatDialogConfig, MatDialogRef } from '@angular/material';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private cs: ContactService, private mDialog: MatDialog) { }
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'fullName', 'email', 'mobile', 'city', 'gender', 'isPermanent',
    'birthday', 'actions'];
  array = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  searchKey: string;

  ngOnInit(): void {
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
  onCreate(): void {
    // popup açılırken temizlenerek açılsın
    this.cs.initializeFormGroup();
    // burada html ayağa kalkacak
    // inject edilen matDialog çağrılmalı
    // html içeriğin popup içerisine yerleşmesi için EntryComponent olarak ilgili modulde tanımlanmalı

    // html'in ekranda düzgünce görünmesi için config yapılandırması olmalı
    const mConfig = new MatDialogConfig();
    mConfig.disableClose = true;
    mConfig.autoFocus = true;
    mConfig.width = '60%';
    this.mDialog.open(ContactComponent, mConfig);

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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '60%';
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    this.mDialog.open(ContactComponent, dialogConfig);
  }
}
