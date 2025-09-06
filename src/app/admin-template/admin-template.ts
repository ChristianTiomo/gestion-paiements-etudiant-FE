import { Component } from '@angular/core';
import {AuthService} from '../services/auth-service';

@Component({
  selector: 'app-admin-template',
  standalone: false,
  templateUrl: './admin-template.html',
  styleUrl: './admin-template.css'
})
export class AdminTemplate {
constructor(public authService: AuthService) {

}

  logout() {
     this.authService.logoutService();
  }
}
