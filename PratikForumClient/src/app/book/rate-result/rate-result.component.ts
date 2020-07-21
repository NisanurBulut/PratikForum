import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rate-result',
  templateUrl: './rate-result.component.html',
  styleUrls: ['./rate-result.component.css']
})
export class RateResultComponent implements OnInit {
  @Input() puanDetay = [];
  constructor() { }

  ngOnInit() {
  }

}
