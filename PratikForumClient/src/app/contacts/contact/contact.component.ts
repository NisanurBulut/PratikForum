import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/shared/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private cs: ContactService) { }

  ngOnInit(): void {
  }

}
