import { Injectable } from '@angular/core';
import { SideBarItem } from '../models/side-bar-item';
import { AuthService } from '../../feature/authentication/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  userType: string = '';

  constructor(private _auth: AuthService) {
    this.userType = this._auth.isManager() ? 'manager' : 'employee';
  }

  getRoleRoutes(): SideBarItem[] {
    return [
      {
        text: 'Home',
        iconName: 'home',
        routeTo: '/dashboard/home',
        present: true,
      },
      {
        text: 'Users',
        iconName: 'group',
        routeTo: '/dashboard/manager/users/list',
        present: this._auth.isManager(),
      },
      {
        text: 'Projects',
        iconName: 'work',
        routeTo: `/dashboard/${this.userType}/projects/list`,
        present: true,
      },
      {
        text: 'Tasks',
        iconName: 'task_alt',
        routeTo: `/dashboard/${this.userType}/tasks/list`,
        present: true,
      },
    ];
  }
}
