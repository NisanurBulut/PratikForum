import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/app/models/budget-item.model';
import { MatDialog } from '@angular/material/dialog';
import { EditItemModalComponent } from '../edit-item-modal/edit-item-modal.component';
import { IUpdateBudgetEvent } from 'src/app/shared/IUpdateBudgetEvent';


@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDeleteBudgetItem: EventEmitter<BudgetItem> = new EventEmitter();
  @Output() onUpdateBudgetItem: EventEmitter<IUpdateBudgetEvent> = new EventEmitter();
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  deleteBudgetItem(delBudgetItem: BudgetItem) {
    // burada da parentine emit etmeli
    this.onDeleteBudgetItem.emit(delBudgetItem);
  }
  editBudgetItem(edBudgetItem: BudgetItem) {
    console.log(edBudgetItem);
    const dialogRef = this.dialog.open(EditItemModalComponent, {
      width: '500px',
      data: edBudgetItem
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        // güncelleme
        //   this.budgetItems[this.budgetItems.indexOf(edBudgetItem)] = result;

        this.onUpdateBudgetItem.emit({
          old: edBudgetItem,
          new: result
        });
      }
    });
  }
}
