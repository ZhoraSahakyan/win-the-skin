import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatSliderModule} from '@angular/material/slider';
import { SelectDropDownModule } from 'ngx-select-dropdown';

import {AffordItemComponent} from './afford-item/afford-item.component';
import { DropdownCheckboxComponent } from './dropdown-checkbox/dropdown-checkbox.component';
import { RangeComponent } from './range/range.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { SortingComponent } from './sorting/sorting.component';
import { WithdrawItmeComponent } from './withdraw-itme/withdraw-itme.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { SearchComponent } from './search/search.component';
import { WithdrawFilterComponent } from './withdraw-filter/withdraw-filter.component';
import { SelectBoxComponent } from './select-box/select-box.component';
@NgModule({
  declarations: [
    AffordItemComponent,
    DropdownCheckboxComponent,
    RangeComponent,
    SubHeaderComponent,
    SortingComponent,
    WithdrawItmeComponent,
    TooltipComponent,
    SearchComponent,
    WithdrawFilterComponent,
    SelectBoxComponent
  ],
  imports: [
    CommonModule,
    MatSliderModule,
    SelectDropDownModule
  ],
  exports: [
    AffordItemComponent,
    DropdownCheckboxComponent,
    RangeComponent,
    SubHeaderComponent,
    SortingComponent,
    WithdrawItmeComponent,
    SearchComponent,
    WithdrawFilterComponent
  ]
})
export class SharedModule {
}
