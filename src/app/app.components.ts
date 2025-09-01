import { Component } from '@angular/core';
import { HeaderComponent } from './shared/components/header/header.component';
import { TodoListComponent } from './features/todos/components/todo-list.component';
// import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [/*RouterOutlet,*/ HeaderComponent, TodoListComponent],
  template: `
    <app-header></app-header>
    <main class="container mx-auto p-4">
      <app-todo-list></app-todo-list>
    </main>
  `,
  styles: [],
})
export class AppComponent {
  title = 'todo-list-app';
}
