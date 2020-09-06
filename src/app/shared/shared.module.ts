import {NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AffordItemComponent} from './afford-item/afford-item.component';

@NgModule({
  declarations: [AffordItemComponent],
  imports: [
    CommonModule
  ],
  entryComponents: [
    AffordItemComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule {
}
