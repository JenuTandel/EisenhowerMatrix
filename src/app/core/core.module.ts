import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [HeaderComponent, ProfileComponent, NavbarComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, ProfileComponent, NavbarComponent],
})
export class CoreModule {}
