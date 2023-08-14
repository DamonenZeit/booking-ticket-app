import { Component, Input } from '@angular/core';
import { LayoutService } from '../layout/service/layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  constructor(private LayoutService: LayoutService) {}

  getBodyClass(): string {
    let styleClass = '';
    if(this.LayoutService.isSideNavCollapsed$ && this.screenWidth > 768) {
      styleClass = 'body-trimmed'; 
    } else if(this.LayoutService.isSideNavCollapsed$ && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = 'body-md-screen'
    }
    return styleClass;
  }
}