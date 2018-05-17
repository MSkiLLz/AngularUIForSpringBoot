import { Injectable } from '@angular/core';
import { Task } from './task';


@Injectable({
  providedIn: 'root'
})
export class TaskDataService {

  tasks: Task[] = [];

  constructor() { }

  addTask(task: Task) {

  }

  getAllTasksWithUsers(): Task[] {
    return this.tasks;
  }

  getAllTasksByStatus(): Task[] {
    return this.tasks;
  }

  getAllTasksNotCompleted(): Task[] {
    return this.tasks;
  }

  updateTask(id: number, values: Object = {}): Task {
    let task = this.getTaskById(id);
    return task;
  }

  getTaskById(id: number): Task {
    return this.tasks.filter(task => task.id === id).pop();
  }
}
