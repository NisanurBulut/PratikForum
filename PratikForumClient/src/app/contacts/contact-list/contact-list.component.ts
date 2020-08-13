import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../../shared/contact.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private cs: ContactService) { }
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'fullName', 'Email', 'Mobile', 'City', 'Department', 'Gender', 'IsPermanent',
    'Birthday', 'actions'];
  array = [];
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
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

}
