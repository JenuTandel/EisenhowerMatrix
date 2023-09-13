import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserAuthService } from './core/services/user-auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'EisenhowerMatrix';
  public userData: any;

  constructor(
    public authService: AuthService,
    private userAuth: UserAuthService
  ) {
    this.userData = {};
    authService.isAuthenticated$.subscribe((res) => {
      if (!res) {
        this.authService.loginWithRedirect();
      } else {
        console.log(res);

        this.authService.user$.subscribe((res) => {
          this.userData.name = res?.name;
          this.userData.email = res?.email;
          this.userData.profile = res?.picture;
          this.userData.id = res?.sub?.split('|').pop();

          this.userAuth.getUserData().subscribe((res) => {
            if (
              res.length == 0 ||
              !res.some((item: any) => item.id == +this.userData.id)
            ) {
              this.userAuth.postUserData(this.userData).subscribe((res) => {
                console.log(res);

                localStorage.setItem('id', res.id);
              });
            }
          });
        });
      }
    });
  }
}
