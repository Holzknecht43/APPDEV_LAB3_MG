import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule, RouterLink } from '@angular/router';
import { TaskService } from './task-service'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,  RouterModule, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lab2');
}
