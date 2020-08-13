import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MaterialConfirmDialogComponent } from '../contacts/material-confirm-dialog/material-confirm-dialog.component';
@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private matdialog: MatDialog) { }
  openConfirmDialog(msg) {
   return this.matdialog.open(MaterialConfirmDialogComponent, {
      disableClose: true,
      width: '390px',
      panelClass: 'confirm-dialog-container',
      position: { top: '10px' },
      data: { message: msg }
    });
  }
}
