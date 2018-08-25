import { Movie } from './../models/movie.model';
import { MovieService } from './../movie.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {

  movie: Movie;
  subscription: Subscription;

  constructor(
    private _router: ActivatedRoute,
    private movieService: MovieService) {

  }

  ngOnInit() {
    this.subscription = this._router.params.subscribe(params => {

      this.movie = this.movieService.getMovie(params.id);

    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
