import { Routes } from '@angular/router';
import { TaskList } from './task-list/task-list';
import { TaskForm } from './task-form/task-form';

export const routes: Routes = [
    {path:'tasklist', component:TaskList},
    {path: 'taskform', component: TaskForm}

];
