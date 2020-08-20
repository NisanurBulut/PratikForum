import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material/material.module';
import { CommonModule } from '@angular/common';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        FlexModule
    ],
    exports: [
        CommonModule,
        RouterModule,
        FormsModule,
        HttpClientModule,
        MaterialModule,
        ReactiveFormsModule,
        FlexLayoutModule,
        FlexModule
    ],
    providers: []
})
export class SharedModule { }
