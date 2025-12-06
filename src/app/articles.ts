import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Articles {
  private apiUrl = 'https://bracamea-backend.onrender.com/articles';

  constructor(private http: HttpClient) {}

  articles$ = new Subject<any[]>(); 
  articlesList = this.articles$.asObservable();
  allArticles: any[] = [];
  panierArticles: any[] = [];


  currentFilters: string[] = [];
  getArticles(): Observable<any> {
  return this.http.get(this.apiUrl).pipe(
    tap((data: any) => {
      this.articles$.next(data.Article);
    })
  );
}

}
