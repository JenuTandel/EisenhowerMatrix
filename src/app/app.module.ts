import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment.development';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { PriorityTaskContainerComponent } from './priority-task-container/priority-task-container.component';
import { PriorityTaskPresentationComponent } from './priority-task-container/priority-task-presentation/priority-task-presentation.component';
import { SharedModule } from './shared/shared.module';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFormContainerComponent } from './task-form-container/task-form-container.component';
import { TaskFormPresentationComponent } from './task-form-container/task-form-presentation/task-form-presentation.component';
import { TaskListContainerComponent } from './task-list-container/task-list-container.component';
import { TaskListPresentationComponent } from './task-list-container/task-list-presentation/task-list-presentation.component';
import { TaskProgressComponent } from './task-progress/task-progress.component';
import { AuthModule } from '@auth0/auth0-angular';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormContainerComponent,
    TaskFormPresentationComponent,
    TaskListContainerComponent,
    TaskListPresentationComponent,
    PriorityTaskContainerComponent,
    PriorityTaskPresentationComponent,
    TaskProgressComponent,
    TaskDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AuthModule.forRoot(environment.auth),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
