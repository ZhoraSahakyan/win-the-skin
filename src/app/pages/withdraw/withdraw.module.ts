import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {WithdrawPageComponent} from './withdraw-page/withdraw-page.component';


const withdrawRoutes: Routes = [
  {path: '', component: WithdrawPageComponent}
];

@NgModule({
  declarations: [WithdrawPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(withdrawRoutes)
  ]
})
export class WithdrawModule {
}
