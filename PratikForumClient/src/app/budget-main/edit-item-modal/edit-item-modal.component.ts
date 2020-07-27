import { Component, OnInit, Input } from '@angular/core';
import { BudgetItem } from 'src/app/models/budget-item.model';

@Component({
  selector: 'app-edit-item-modal',
  templateUrl: './edit-item-modal.component.html',
  styleUrls: ['./edit-item-modal.component.css']
})
export class EditItemModalComponent implements OnInit {
  @Input() item: BudgetItem;
  constructor() { }

  ngOnInit() {
  }
  onsubmitted(updatedItem: BudgetItem) {

  }
}
