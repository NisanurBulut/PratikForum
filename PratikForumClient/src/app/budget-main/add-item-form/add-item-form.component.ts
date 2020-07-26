import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  // Parente haber verelim

  @Output() submitForm: EventEmitter<BudgetItem> = new EventEmitter();
  ngOnInit() {
  }
  onSubmit(form: NgForm): void {
    // bu değeri dinleyene formu gönderir
    // parente haber verecek
  this.submitForm.emit(form.value);
  }
}
