import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bank-comment',
  templateUrl: './bank-comment.component.html',
  styleUrls: ['./bank-comment.component.css']
})
export class BankCommentComponent implements OnInit {
@Input() bankYorumlar:[];
  constructor() { }

  ngOnInit() {
  }

}
