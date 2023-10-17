import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment.development';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { TaskStatusComponent } from './task-status/task-status.component';

@NgModule({
  declarations: [AppComponent, TaskStatusComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    AuthModule.forRoot(environment.auth),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
