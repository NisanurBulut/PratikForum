import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetItem } from 'src/app/models/budget-item.model';

@Component({
  selector: 'app-add-item-form',
  templateUrl: './add-item-form.component.html',
  styleUrls: ['./add-item-form.component.css']
})
export class AddItemFormComponent implements OnInit {
  constructor() { }
  @Input() item: BudgetItem = new BudgetItem('', null);
  ngOnInit() {
  }
  onSubmit(form: NgForm): void {
    alert('Merhaba Nisanur');
  }
}
