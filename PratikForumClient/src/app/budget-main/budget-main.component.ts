import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../models';
import { IUpdateBudgetEvent } from '../shared/IUpdateBudgetEvent';

@Component({
  selector: 'app-budget-main',
  templateUrl: './budget-main.component.html',
  styleUrls: ['./budget-main.component.scss']
})
export class BudgetMainComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  totalBudget = 0;
  constructor() { }

  ngOnInit() {
  }
  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
    this.totalBudget += newItem.amount;
  }
  deleteItem(delItem: BudgetItem) {
    const index = this.budgetItems.indexOf(delItem);
    this.budgetItems.splice(index, 1);
    this.totalBudget -= delItem.amount;
  }
  updateItem(updateEvent: IUpdateBudgetEvent) {
    this.budgetItems[this.budgetItems.indexOf(updateEvent.old)] = updateEvent.new;
    this.totalBudget -= updateEvent.old.amount;
    this.totalBudget += updateEvent.new.amount;
  }
}
