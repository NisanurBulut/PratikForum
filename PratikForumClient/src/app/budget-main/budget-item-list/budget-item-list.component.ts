import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/app/models/budget-item.model';


@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  // tslint:disable-next-line: no-output-on-prefix
  @Output() onDeleteBudgetItem: EventEmitter<BudgetItem> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  deleteBudgetItem(delBudgetItem: BudgetItem) {
    // burada da parentine emit etmeli
    this.onDeleteBudgetItem.emit(delBudgetItem);
  }
}
