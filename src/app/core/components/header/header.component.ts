import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { OverlayService } from '../../services/overlay.service';
import { TaskFormContainerComponent } from 'src/app/task-form-container/task-form-container.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    public authService: AuthService,
    private overlayService: OverlayService
  ) {}

  onAddTask() {
    this.overlayService.openDialog(TaskFormContainerComponent, 'taskform');
  }
}
