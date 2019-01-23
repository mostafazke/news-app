import { Component, OnInit } from '@angular/core';
import { NewsApiService } from './news-api.service';

@Component({
  selector: 'mo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private _newsApi: NewsApiService) {}

  ngOnInit() {
    this._newsApi.initArticles().subscribe(data => this.mArticles = data['articles']);
    this._newsApi.initSources().subscribe(data => this.mSources = data['sources']);
  }

  searchArticles(source) {
    console.log('selected source is: ' + source);
    this._newsApi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
}
