import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../movie-list/movie-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieListComponent],
  template: `
    <header>
      <h1>LukyTv</h1>
    </header>
    <main>
      <app-movie-list></app-movie-list>
    </main>
  `,
  styles: [`
    :host {
      display: block;
      background-color: #00ffff;
      min-height: 100vh;
      color: #333;
    }
    header {
      background-color: #008080;
      padding: 20px;
      text-align: center;
    }
    h1 {
      margin: 0;
      color: white;
    }
    main {
      padding: 20px;
    }
  `]
})
export class HomeComponent {}