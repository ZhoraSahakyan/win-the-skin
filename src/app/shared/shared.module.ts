import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AffordItemComponent} from './afford-item/afford-item.component';
import { DropdownCheckboxComponent } from './dropdown-checkbox/dropdown-checkbox.component';
@NgModule({
  declarations: [
    AffordItemComponent,
    DropdownCheckboxComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AffordItemComponent,
    DropdownCheckboxComponent
  ]
})
export class SharedModule {
}
