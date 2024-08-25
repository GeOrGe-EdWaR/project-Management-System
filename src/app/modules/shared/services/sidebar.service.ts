import { Injectable } from '@angular/core';
import { SideBarItem } from '../models/side-bar-item';
import { AuthService } from '../../feature/authentication/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  constructor(private _auth:AuthService) {}

  getRoleRoutes(): SideBarItem[] {
    return [
      {
        text: 'Home',
        iconName:'home',
        routeTo: '/dashboard/home',
        present: true,
      },
      {
        text: 'Users',
        iconName:'group',
        routeTo: '/dashboard/manager/users',
        present: this._auth.isManager(),

      },
      {
        text: 'Projects',
        iconName:'work',
        routeTo: '/dashboard/manager/projects/list',
        present: true,
      },
      {
        text: 'Tasks',
        iconName:'task_alt',
        routeTo: '/dashboard/manager/tasks/list',
        present: true,
      }
    ];
  }
}
