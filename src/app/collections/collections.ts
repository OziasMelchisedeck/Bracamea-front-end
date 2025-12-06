import { Component, OnInit } from '@angular/core';
import { Articles } from '../articles';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collections',
  imports: [CommonModule],
  templateUrl: './collections.html',
  styleUrl: './collections.scss',
})
export class Collections implements OnInit{
  constructor(
    public articlesService: Articles
  ) {}

  url ="https://bracamea-backend.onrender.com/public/";
  filters:string[] = [];
  articles:any[] = [];
  ngOnInit(): void {
    console.log(this.articlesService.allArticles);
    this.articlesService.getArticles().subscribe();
    this.articlesService.articlesList.subscribe((data:any) => {
      this.articlesService.allArticles = data;
    });
    this.articles = this.articlesService.allArticles;
  }
  
  sanitizeUrl(url: string) {
  return encodeURI(url);
  }

  addfilter(filter: string) {
  this.filters.push(filter.toLowerCase());
  console.log(this.filters);
  this.articles = this.articlesService.allArticles.filter((article) =>
    this.filters.every((f) =>
      article.type.toLowerCase().includes(f) ||
      article.modele.toLowerCase().includes(f) ||
      article.taille.includes(f) ||
      article.pointure.includes(f)||
      article.genre.toLowerCase().includes(f)
    )
  );
  this.articlesService.articlesList.subscribe((data:any) => {
      this.articlesService.allArticles = data.filter((article : any) =>
    this.filters.every((f) =>
      article.type.toLowerCase().includes(f) ||
      article.modele.toLowerCase().includes(f) ||
      article.taille.includes(f) ||
      article.pointure.includes(f)||
      article.genre.toLowerCase().includes(f)
    )
  );
    });
  console.log(this.articles);
  }
  ajoutPanier(article:any){
    this.articlesService.panierArticles.push(article);
  }
}