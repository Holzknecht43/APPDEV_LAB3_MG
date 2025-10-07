import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule  } from '@angular/forms';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {
  constructor(public taskService: TaskService){}

  getCompletedCount() {
  return this.taskService.task.filter(t => t.completed).length;
}


}
