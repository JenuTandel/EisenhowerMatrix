export class Task {
  id?: number;
  taskName?: string;
  taskDescription?: string;
  taskUrgency?: string;
  taskImportance?: string;
  taskStatus?: number;
  startDate?: Date;
  dueDate?: Date;
  completionDate?: Date;
  userId?: number;
}

export enum TaskStatus {
  NotStarted = 'Not Started',
  InProgress = 'In Progress',
  Done = 'Done',
}

export enum TaskUrgency {
  Urgent = 'Urgent',
  NotUrgent = 'Not Urgent',
}

export enum TaskImportance {
  Important = 'Important',
  NotImportant = 'Not Important',
}
