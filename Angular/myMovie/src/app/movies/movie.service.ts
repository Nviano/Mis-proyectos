import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { Movie } from './../movies/models/movie.model';
import {map} from 'rxjs/operators'
@Injectable()

export class MovieService {

  movies: Movie[] = [];

  constructor( private _http: HttpClient) {
    
   }

  getAllMovies(){
    const url = 'http://localhost:3000/movie'
    return this._http.get(url).pipe(
      map((data: any) => {
        this.movies = data.movies;
        return data.movies;
      })
    );
   
  }

  getMovie( id: string){
    const movie = this.movies.filter(movie =>
       {
       return movie._id ===id}
      )

    return movie[0];
  }
}
