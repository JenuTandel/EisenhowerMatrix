import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { OverlayService } from '../../services/overlay.service';
import { TaskFormContainerComponent } from 'src/app/task-form-container/task-form-container.component';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public profile: string | undefined;
  constructor(
    public authService: AuthService,
    private overlayService: OverlayService,
    private userAuth: UserAuthService
  ) {
    authService.user$.subscribe((res) => {
      this.profile = res?.picture;
    });
  }

  onAddTask() {
    this.overlayService.openDialog(TaskFormContainerComponent, 'taskform');
  }
}
