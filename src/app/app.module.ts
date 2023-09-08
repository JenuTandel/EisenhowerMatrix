import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskFormContainerComponent } from './task-form-container/task-form-container.component';
import { TaskFormPresentationComponent } from './task-form-container/task-form-presentation/task-form-presentation.component';
import { TaskListContainerComponent } from './task-list-container/task-list-container.component';
import { TaskListPresentationComponent } from './task-list-container/task-list-presentation/task-list-presentation.component';
import { PriorityTaskContainerComponent } from './priority-task-container/priority-task-container.component';
import { PriorityTaskPresentationComponent } from './priority-task-container/priority-task-presentation/priority-task-presentation.component';
import { TaskProgressComponent } from './task-progress/task-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskFormContainerComponent,
    TaskFormPresentationComponent,
    TaskListContainerComponent,
    TaskListPresentationComponent,
    PriorityTaskContainerComponent,
    PriorityTaskPresentationComponent,
    TaskProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
