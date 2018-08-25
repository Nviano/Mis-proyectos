import { Movie } from './../movies/models/movie.model';
import { MovieService } from './../movies/movie.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // movies: Movie[] = [];

  movies : any;


  constructor(private _movieService: MovieService) {

  }


  ngOnInit() {
    // this.movies = this._movieService.getAllMovies();
    this._movieService.getAllMovies()
    .subscribe((movies : Movie[]) => {
    
        this.movies = movies;
      }
    )
  }

}
