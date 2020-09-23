import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MatTabsModule} from '@angular/material/tabs';

import {ProfilePageComponent} from './profile-page/profile-page.component';
import {SharedModule} from '../../shared/shared.module';

const profileRoutes: Routes = [
  {path: '', component: ProfilePageComponent}
];

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes),
    MatTabsModule,
    SharedModule
  ]
})
export class ProfileModule {
}
