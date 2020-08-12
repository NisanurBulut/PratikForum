import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactService } from '../../shared/contact.service';
import { ContactsComponent } from '../../contacts/contacts.component';
import { ContactComponent } from '../../contacts/contact/contact.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';


@NgModule({
  declarations: [
    ContactsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ContactsComponent,
    ContactComponent
  ],
  providers: [ContactService]
})
export class ContactModule { }
