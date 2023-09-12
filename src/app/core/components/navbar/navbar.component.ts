import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  public line: boolean = true;
  constructor(private router: Router) {}
  onTodolist() {
    this.router.navigateByUrl('/todo-list');
    this.line = true;
  }
  onTaskpriority() {
    this.router.navigateByUrl('/task-priority');
    this.line = false;
  }
}
