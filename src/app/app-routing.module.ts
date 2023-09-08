import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskListContainerComponent } from './task-list-container/task-list-container.component';
import { PriorityTaskContainerComponent } from './priority-task-container/priority-task-container.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo-list',
  },
  {
    path: 'todo-list',
    component: TaskListContainerComponent,
  },
  {
    path: 'task-priority',
    component: PriorityTaskContainerComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
