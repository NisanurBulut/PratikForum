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
    Material.MatTableModule
  ],
  exports: [
    Material.MatToolbarModule
  ]
})
export class MaterialModule { }
