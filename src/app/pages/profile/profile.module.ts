import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ProfilePageComponent} from './profile-page/profile-page.component';

const profileRoutes: Routes = [
  {path: '', component: ProfilePageComponent}
];

@NgModule({
  declarations: [ProfilePageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(profileRoutes)
  ]
})
export class ProfileModule {
}