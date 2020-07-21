import { Component, OnInit, OnDestroy } from '@angular/core';
import { BankService } from '../shared/bank.service';
import { FormBuilder, FormArray, Validators, FormGroup } from '@angular/forms';
import { Bank } from '../models/bank.model';

@Component({
  selector: 'app-bank',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.css']
})
export class BankComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }
}
