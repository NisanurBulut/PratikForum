import { NgModule } from '@angular/core';

import { DashboardService } from '../shared/dashboard.service';
import { ComponentModule } from 'src/app/components/component/component.module';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { SharedModule } from './../modules/shared.module';

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    SharedModule ,
    ComponentModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
