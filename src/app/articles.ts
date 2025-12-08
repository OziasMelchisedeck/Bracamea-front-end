import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Articles {
  private apiUrlDev = 'https://bracamea-backend.onrender.com/articles';
  private apiUrl = 'http://localhost:3000/articles/';

  constructor(private http: HttpClient) {}

  articles$ = new BehaviorSubject<any[]>([]); 
  articlesList = this.articles$.asObservable();
  loading = false;
  panierArticles$ = new BehaviorSubject<any[]>([]);
  panierArticles = this.panierArticles$.asObservable();
  currentFilters: string[] = [];

  getArticles(): Observable<any> {
  return this.http.get(this.apiUrl).pipe(
    tap((data: any) => {
      this.articles$.next(data.Article);
      this.loading = true;
    })
  );}

  addPanier(article : any){
    this.panierArticles$.next([...this.panierArticles$.getValue(), article]);
  }
  removePanier(article:any){
    const currentPanier = this.panierArticles$.getValue();
    const index = currentPanier.indexOf(article);
    if (index > -1) {
      currentPanier.splice(index, 1);
      this.panierArticles$.next([...currentPanier]);
    }
  }
}
