import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'EisenhowerMatrix';
  constructor(public authService: AuthService) {
    authService.isAuthenticated$.subscribe((res) => {
      if (!res) {
        this.authService.loginWithRedirect();
      }
    });
  }
}
