import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {TopPageComponent} from './top-page/top-page.component';


const topRoutes: Routes = [
  {path: '', component: TopPageComponent}
];

@NgModule({
  declarations: [TopPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(topRoutes)
  ]
})
export class TopModule {
}
