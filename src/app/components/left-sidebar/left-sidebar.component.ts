import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-left-sidebar',
  templateUrl: './left-sidebar.component.html',
  styleUrls: ['./left-sidebar.component.scss']
})
export class LeftSidebarComponent implements OnInit {
  toggleMobileMenu: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  public openSidebarMenu(): void {
    this.toggleMobileMenu = !this.toggleMobileMenu;
  }
}
