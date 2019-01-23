import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsApiService {
  api_key = environment.api_key;
  constructor(private http: HttpClient) { }

  initSources() {
    return this.http.get(`https://newsapi.org/v2/sources?language=en&apiKey=${this.api_key}`);
  }

  initArticles() {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=eg&apiKey=${this.api_key}`);
  }

  getArticlesByID(source: String) {
    return this.http.get(`https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${this.api_key}`);
  }
}
