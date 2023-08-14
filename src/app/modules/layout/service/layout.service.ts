// shared-layout.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  private isSideNavCollapsedSubject = new BehaviorSubject<boolean>(false);
  private screenWidthSubject = new BehaviorSubject<number>(0);

  isSideNavCollapsed$: Observable<boolean> = this.isSideNavCollapsedSubject.asObservable();
  screenWidth$: Observable<number> = this.screenWidthSubject.asObservable();

  toggleSideNav(collapsed: boolean) {
    this.isSideNavCollapsedSubject.next(collapsed);
  }

  setScreenWidth(width: number) {
    this.screenWidthSubject.next(width);
  }
}
