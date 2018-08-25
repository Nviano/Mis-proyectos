import { MovieComponent } from './movies/movie/movie.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './movies/search/search.component';

const routes: Routes = [
  { path: '', component:HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: '**', redirectTo: '' }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
