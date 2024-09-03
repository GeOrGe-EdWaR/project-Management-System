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

  tasks: any[] = [];
  users: any[] = [];

  taskColors: any[] = [];
  userColors: any[] = [];

  labelsPC = true;
  doughnut = true;
  animationPC = true;
  colorScheme = 'forest';

  constructor(private _auth: AuthService, private _charts: ChartsService) {
    this._auth.getUserData();

    this.taskColors = this._charts.taskColors;
    this.userColors = this._charts.userColors;
  }

  ngOnInit(): void {
    this.getProfile();
  }

  getProfile(): void {
    this._auth.getProfile().subscribe({
      next: (res) => {
        this.profile = res;

        if (this.profile?.group?.name === 'Manager') {
          this.getTasksStatus();
          this.getUsersData();
        }
      },
    });
  }

  percentageFormatterPC(data: any): string {
    return data.value;
  }

  getUsersData() {
    this._charts.getUsersData().subscribe({
      next: (response) => {
        this.users = response;
      },
    });
  }

  getTasksStatus() {
    this._charts.getTasksData().subscribe({
      next: (response) => {
        this.tasks = response;
      },
    });
  }
}
