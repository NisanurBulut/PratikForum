import { Component, OnInit, Inject } from '@angular/core';
import { BudgetItem } from '../../models';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.css']
})
export class EditItemModalComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<EditItemModalComponent>,
              @Inject(MAT_DIALOG_DATA) public item: BudgetItem
  ) { }

  ngOnInit() {
  }
  onSubmitted(updatedItem: BudgetItem) {
    this.dialogRef.close(updatedItem);
  }
}
