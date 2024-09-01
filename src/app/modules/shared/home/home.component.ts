import { Component } from '@angular/core';
import { AuthService } from '../../feature/authentication/services/auth.service';
import { ChartsService } from '../services/charts.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  profile!: any;
  allTaskStatus: any = [];
  allUsersStatus: any = [];
  allUsers: any = [];
  // viewPC: [number, number] = [700, 400];
  animationPC = true;
  colorScheme = 'forest';

  labelsPC = true;
  doughnut = true;

  constructor(private _auth: AuthService, private _charts: ChartsService) {
    this._auth.getUserData();

    this.profile = _auth.getProfile().subscribe({
      next: (res) => {
        this.profile = res;
      },
    });

    this.getTasksStatus();
    this.getUsersData();
    this.getUsersStatus();
  }

  percentageFormatterPC(data: any): string {
    return data.value + '%';
  }

  getUsersData() {
    this.allUsers = this._charts.getUsersData().subscribe({
      next: (res) => {
        this.allUsers = Object.entries(res).map(([key, value]) => ({
          name: key,
          value,
        }));
        console.log(this.allUsers, 'for charts');
      },
    });
  }

  getTasksStatus() {
    this.allTaskStatus = this._charts.getTasksData().subscribe({
      next: (res) => {
        this.allTaskStatus = Object.entries(res).map(([key, value]) => ({
          name: key,
          value,
        }));
        console.log(this.allTaskStatus, 'for charts');
      },
    });
  }

  getUsersStatus() {
    this.allUsersStatus = this._charts.getUsersData().subscribe({
      next: (res) => {
        this.allUsersStatus = Object.entries(res).map(([key, value]) => ({
          name: key,
          value,
        }));
        console.log(this.allUsersStatus, 'for charts');
      },
    });
  }
}
