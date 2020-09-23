import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dropdown-checkbox',
  templateUrl: './dropdown-checkbox.component.html',
  styleUrls: ['./dropdown-checkbox.component.scss']
})
export class DropdownCheckboxComponent implements OnInit {
  public dropdownToggle: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public dropdownToggleClick(): void {
    this.dropdownToggle = !this.dropdownToggle
  }
}
