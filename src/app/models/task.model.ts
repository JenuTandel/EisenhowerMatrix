export class Task {
  id?: number;
  taskName?: string;
  taskDescription?: string;
  taskUrgency?: string;
  taskImportance?: string;
  startDate?: Date;
  dueDate?: Date;
  userId?: number;
}

export enum TaskStatus {
  NotStarted = 'Not Started',
  InProgress = 'In Progress',
  Done = 'Done',
}
