import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BudgetItem } from 'src/app/models/budget-item.model';

@Component({
  selector: 'app-budget-item-card',
  templateUrl: './budget-item-card.component.html',
  styleUrls: ['./budget-item-card.component.scss']
})
export class BudgetItemCardComponent implements OnInit {
  @Input() item: BudgetItem;
  @Output() removeItem: EventEmitter<BudgetItem> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onRemoveButgetItem(rItem: BudgetItem) {
    // emit etmeli parentine
    this.removeItem.emit(rItem);
  }
}
