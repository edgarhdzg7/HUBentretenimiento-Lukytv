import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { MovieCardComponent } from '../movie-card/movie-card.component';

interface Movie {
  id: number;
  title: string;
  description: string;
  poster: string;
}
@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  template: `
    <div class="movie-grid">
      <app-movie-card *ngFor="let movie of movies" [movie]="movie"></app-movie-card>
    </div>
  `,
  styles: [`
    .movie-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 20px;
    }
  `]
})
export class MovieListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Movie[]>('http://localhost:3000/api/movies').subscribe({
      next: (data) => {
        this.movies = data;
        console.log('Movies loaded:', this.movies);
      },
      error: (error) => {
        console.error('Error fetching movies:', error);
      }
    });
  }
}