import { Component, OnInit } from '@angular/core';
import { BudgetItem } from '../models/budget-item.model';

@Component({
  selector: 'app-budget-main',
  templateUrl: './budget-main.component.html',
  styleUrls: ['./budget-main.component.scss']
})
export class BudgetMainComponent implements OnInit {

  budgetItems: BudgetItem[] = new Array<BudgetItem>();
  constructor() { }

  ngOnInit() {
  }
  addItem(newItem: BudgetItem) {
    this.budgetItems.push(newItem);
  }
}
