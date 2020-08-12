import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../shared/contact.service';

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

  constructor(public cs: ContactService) { }

  ngOnInit(): void {
  }
  onClear(): void {
    this.cs.form.reset();
    this.cs.initializeFormGroup();
  }
}
