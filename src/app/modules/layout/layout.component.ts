import { Component } from '@angular/core';

interface SideNavToggle {
  screenWitth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent {
  isSideNavCollapsed = false;
  screenWidth = 0;
  
  onToggleSideNav(data: SideNavToggle): void {
    this.isSideNavCollapsed = data.collapsed;
  }
}
