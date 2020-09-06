import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {TopPageComponent} from './top-page/top-page.component';
import {SharedModule} from "../../shared/shared.module";


const topRoutes: Routes = [
  {path: '', component: TopPageComponent}
];

@NgModule({
  declarations: [TopPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(topRoutes),
    SharedModule
  ]
})
export class TopModule {
}
