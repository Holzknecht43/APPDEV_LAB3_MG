import { Injectable } from '@angular/core';

export interface Task {
  title: string;
  completed: boolean;
}

@Injectable({providedIn: 'root'})
export class TaskService {
  task: Task[] = [];

  addTask(title:string){
    if (title.trim()){
      this.task.push({title, completed: false});
    }
  }

  toggleTask(index: number) {
    this.task[index].completed = !this.task[index].completed;
  }

  get totalTasks(): number {
    return this.task.length;
  }
}
