import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'profile', pathMatch: 'full'},
  {path: 'profile', loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfileModule)},
  {path: 'top', loadChildren: () => import('./pages/top/top.module').then(m => m.TopModule)},
  {path: 'withdraw', loadChildren: () => import('./pages/withdraw/withdraw.module').then(m => m.WithdrawModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
