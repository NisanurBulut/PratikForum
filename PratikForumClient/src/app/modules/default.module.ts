import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';

import { DashboardService } from '../shared/dashboard.service';
import { ComponentModule } from 'src/app/components/component/component.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentModule,
    FlexLayoutModule,
    FlexModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
