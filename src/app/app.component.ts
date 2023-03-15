import { Component } from '@angular/core';
import { IOMDBResponse } from './omdbresponse';
import { OmdbApiService } from './services/omdb-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Movie Finder';
  movieData:IOMDBResponse | undefined;
  errorMessage:any;

  constructor(private _omdbService:OmdbApiService) {}

  getMovieDetails(movieName:HTMLInputElement) : boolean {
    this._omdbService.getMovieData(movieName.value).subscribe(
      movieData => {
        this.movieData = movieData;
        console.log('Director Name: ' + this.movieData.Director);
      }
    );

    return false;
  }
}
