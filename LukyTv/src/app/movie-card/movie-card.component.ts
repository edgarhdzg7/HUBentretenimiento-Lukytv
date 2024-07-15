import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="movie-card">
      <img [src]="movie.poster" [alt]="movie.title">
      <h1>{{ movie.title }}</h1>
      <h3>{{ movie.year }}</h3>
      <h4>Genero: {{ movie.genre }}</h4>
      <h4>Rating: {{ movie.rating }}</h4>
      <p>{{ movie.description }}</p>
    </div>
  `,
  styles: [`
    .movie-card {
      background-color: #e0ffff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
    h3, p ,h4{
      padding: 10px;
      margin: 0;
    }
  `]
})
export class MovieCardComponent {
  @Input() movie: any;
}