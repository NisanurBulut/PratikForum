import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../shared/contact.service';
import { MatDialogRef } from '@angular/material';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  departments = [
    { id: 3, value: 'Dep-3' },
    { id: 2, value: 'Dep-2' },
    { id: 1, value: 'Dep-1' }
  ];

  constructor(public cs: ContactService, private dr: MatDialogRef<ContactComponent>) { }

  ngOnInit(): void {
  }
  onClear(): void {
    this.cs.form.reset();
    this.cs.initializeFormGroup();
  }
  onSubmit(): void {
    if (this.cs.form.valid) {
      if (!this.cs.form.get('$key')) {
        this.cs.insertContact(this.cs.form.value);
      }
      else {
        this.cs.updateContact(this.cs.form.value);
      }
      this.cs.form.reset();
      this.cs.initializeFormGroup();
      this.onClose();
      // insert işlemin ardından kapatılır
    }
  }
  onClose(): void {
    this.cs.form.reset();
    this.cs.initializeFormGroup();
    this.dr.close();
  }
}
