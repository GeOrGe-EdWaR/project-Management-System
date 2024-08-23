import { Component, EventEmitter, Output } from '@angular/core';
import { SideBarItem } from '../models/side-bar-item';
import { SidebarService } from '../services/sidebar.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Output() collapseSidebar = new EventEmitter();

  routes: SideBarItem[] = [];

  activeRoute: string = '';

  isCollapsed = false;

  constructor( private _sidebarService: SidebarService) {
  
    this.routes = this._sidebarService.getRoleRoutes();
    this.collapseSidebar.emit(this.isCollapsed);
  }

  toggleSideBarExpansion(): void {
    const sidebar = document.getElementById('sidebar');

    this.isCollapsed = !this.isCollapsed;
    
    sidebar?.classList.toggle('collapsed');
    this.collapseSidebar.emit(this.isCollapsed);
  }

  setActiveRoute(routeTo: string): void {
    this.activeRoute = routeTo;
  }
}
