import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { DashboardComponent } from '../../modules/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { ComponentModule } from 'src/app/components/component/component.module';
import { MatSidenavModule, MatDividerModule, MatCardModule } from '@angular/material';
import { FlexModule, FlexLayoutModule } from '@angular/flex-layout';
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
    MatDividerModule,
    MatCardModule,
    FlexLayoutModule,
    FlexModule
  ]
})
export class DefaultModule { }
