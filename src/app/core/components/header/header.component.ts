import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { OverlayService } from '../../services/overlay.service';
import { TaskFormContainerComponent } from 'src/app/task-form-container/task-form-container.component';
import { UserAuthService } from '../../services/user-auth.service';
import { DataCommunicationsService } from '../../services/data-communications.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public profile: string | undefined;
  public searchTerm: string;
  constructor(
    public authService: AuthService,
    private overlayService: OverlayService,
    private userAuth: UserAuthService,
    private dataCommunicationService: DataCommunicationsService
  ) {
    this.searchTerm = '';
    authService.user$.subscribe((res) => {
      this.profile = res?.picture;
    });
  }

  onSearch() {
    this.dataCommunicationService.setSearchTerm(this.searchTerm);
  }

  onAddTask() {
    this.overlayService.openDialog(TaskFormContainerComponent, 'taskform');
  }
}
