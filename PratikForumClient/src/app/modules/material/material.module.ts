import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatToolbarModule,
    Material.MatDialogModule,
    Material.MatSidenavModule,
    Material.MatDividerModule,
    Material.MatSidenavModule,
    Material.MatCardModule,
    Material.MatPaginatorModule,
    Material.MatTableModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatNativeDateModule,
    Material.MatDatepickerModule,
    Material.MatCheckboxModule,
    Material.MatButtonModule
  ],
  exports: [
    Material.MatToolbarModule,
    Material.MatDialogModule,
    Material.MatSidenavModule,
    Material.MatDividerModule,
    Material.MatSidenavModule,
    Material.MatCardModule,
    Material.MatPaginatorModule,
    Material.MatTableModule,
    Material.MatGridListModule,
    Material.MatFormFieldModule,
    Material.MatInputModule,
    Material.MatRadioModule,
    Material.MatSelectModule,
    Material.MatCheckboxModule,
    Material.MatNativeDateModule,
    Material.MatDatepickerModule,
    Material.MatButtonModule
    ]
})
export class MaterialModule { }
