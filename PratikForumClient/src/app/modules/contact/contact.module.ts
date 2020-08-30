import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import {
    ContactsComponent,
    ContactListComponent,
    ContactComponent } from '../../contacts';
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
