import { Injectable } from '@angular/core';
import { SideBarItem } from '../models/side-bar-item';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  constructor() { }


  getRoleRoutes(): SideBarItem[] {
    return [
      {
        text: 'Users',
        iconClass: 'fa-solid fa-users',
        routeTo: '/dashboard/home',
        present: true,
      },
      {
        text: 'Projects',
        iconClass: 'fa-solid fa-chalkboard-user',
        routeTo: '',
        present: true,
      },
      {
        text: 'Tasks',
        iconClass: 'fa-solid fa-list-check',
        routeTo: '',
        present: true,
      },
      {
        text: 'Users',
        iconClass: 'fas fa-user-group',
        routeTo: '/dashboard/admin/users',
        present: false,
      },
    ];}
  }
