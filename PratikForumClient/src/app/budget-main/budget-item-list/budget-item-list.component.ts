import { Component, OnInit, Input } from '@angular/core';
import { BudgetItem } from 'src/app/models/budget-item.model';

@Component({
  selector: 'app-budget-item-list',
  templateUrl: './budget-item-list.component.html',
  styleUrls: ['./budget-item-list.component.scss']
})
export class BudgetItemListComponent implements OnInit {
  @Input() budgetItems: BudgetItem[];
  constructor() { }

  ngOnInit() {
  }

}
