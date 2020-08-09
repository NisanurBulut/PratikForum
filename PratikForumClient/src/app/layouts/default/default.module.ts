import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { ComponentModule } from 'src/app/components/component/component.module';
import {MatSidenavModule, MatDividerModule} from '@angular/material';

@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentModule,
    MatSidenavModule,
    MatDividerModule
  ]
})
export class DefaultModule { }
