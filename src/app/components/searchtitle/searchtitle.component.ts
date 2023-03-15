import { Component } from '@angular/core';
import { OmdbApiService } from 'src/app/services/omdb-api.service';
import { IOMDBResponse } from '../../omdbresponse';

@Component({
  selector: 'app-searchtitle',
  templateUrl: './searchtitle.component.html',
  styleUrls: ['./searchtitle.component.css']
})
export class SearchtitleComponent {
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
