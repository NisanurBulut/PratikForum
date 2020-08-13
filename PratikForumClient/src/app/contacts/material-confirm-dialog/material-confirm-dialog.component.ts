import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-material-confirm-dialog',
  templateUrl: './material-confirm-dialog.component.html',
  styleUrls: ['./material-confirm-dialog.component.css']
})
export class MaterialConfirmDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data, private dr: MatDialogRef<MaterialConfirmDialogComponent>) { }

  ngOnInit(): void {
  }
  onClose(): void {
    this.dr.close(false);
  }
}
