import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ContactsComponent } from '../../contacts/contacts.component';
import { ContactListComponent } from '../../contacts/contact-list/contact-list.component';
import { ContactComponent } from '../../contacts/contact/contact.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        ContactComponent,
        ContactsComponent,
        ContactListComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild([ { path: 'contacts', component: ContactsComponent }])
    ],
    exports: [
        ContactComponent,
        ContactsComponent,
        ContactListComponent
    ],
    entryComponents: [ContactComponent]
})
export class ContactModule { }
