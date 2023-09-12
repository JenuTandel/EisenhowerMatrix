import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { UserAuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'EisenhowerMatrix';
  public userData: any;

  constructor(
    public authService: AuthService,
    private userauth: UserAuthService
  ) {
    this.userData = {};
    authService.isAuthenticated$.subscribe((res) => {
      if (!res) {
        this.authService.loginWithRedirect();
      }
      // else {
      //   this.authService.user$.subscribe((res) => {
      //     this.userData.name = res?.name;
      //     this.userData.email = res?.email;
      //     this.userData.profile = res?.picture;
      //     this.userData.id = res?.sub?.split('|').pop();
      //     // if (this.alreadyPost == false) {
      //     this.userauth.postUserData(this.userData).subscribe((res) => {});
      //     // } else {
      //     //   this.userauth.putUserData(this.userData).subscribe((res) => {
      //     //     console.log(res);
      //     //   });
      //     // }
      //   });
      // }
    });
  }
  ngOnInit() {}
}
