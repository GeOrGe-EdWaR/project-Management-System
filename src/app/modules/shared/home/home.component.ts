import { Component } from '@angular/core';
import { AuthService } from '../../feature/authentication/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  profile!: any;

  constructor(private _auth: AuthService) {
    this._auth.getUserData();

    this.profile = _auth.getProfile().subscribe({next:(res)=>{
      this.profile = res;      
    }});
  }
}
