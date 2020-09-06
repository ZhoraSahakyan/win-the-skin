import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {WithdrawPageComponent} from './withdraw-page/withdraw-page.component';
import {SharedModule} from '../../shared/shared.module';


const withdrawRoutes: Routes = [
  {path: '', component: WithdrawPageComponent}
];

@NgModule({
  declarations: [WithdrawPageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(withdrawRoutes),
    SharedModule
  ]
})
export class WithdrawModule {
}
