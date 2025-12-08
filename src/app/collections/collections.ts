import { Component, OnInit } from '@angular/core';
import { Articles } from '../articles';
import { CommonModule } from '@angular/common';
import { firstValueFrom } from 'rxjs';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-collections',
  imports: [CommonModule, RouterLink],
  templateUrl: './collections.html',
  styleUrl: './collections.scss',
})
export class Collections implements OnInit{
  constructor(
    public articlesService: Articles
  ) {}

  urlDev ="https://bracamea-backend.onrender.com/public/";
  url = "http://localhost:3000/public/";
  filters:string[] = [];
  articles!: any[];
  ngOnInit(): void {
    this.loadArticles();
  }
  
  loadArticles(){
    if(!this.articlesService.loading){
      firstValueFrom(this.articlesService.getArticles()).then(()=>{
        this.articlesService.articlesList.subscribe((data:any) => {
          this.articles = data;
        });
      });
    } else{
      this.articlesService.articlesList.subscribe((data:any) => {
        this.articles = data;
      });
    }
  }
  sanitizeUrl(url: string) {
  return encodeURI(url);
  }

  addfilter(filter: string) {
   if(!this.filters.includes(filter)){
    this.filters.push(filter);
   }
    console.log(this.filters);
    this.filtrer();
  }
  removefilter(filter: string) {
    const index = this.filters.indexOf(filter);
    if (index > -1) {
      this.filters.splice(index, 1);
    }
    this.articlesService.articlesList.subscribe((data:any) => {
        this.articles = data;
      });
    this.filtrer();
  }
  filtrer(){
    this.articles = this.articles.filter((article) =>
      this.filters.every((f) =>
        article.type.toLowerCase().includes(f) ||
        article.modele.toLowerCase().includes(f) ||
        article.taille.includes(f) ||
        article.pointure.includes(f)||
        article.genre.toLowerCase().includes(f)
      )
    );
    if(this.articles.length === 0 || this.filters.length === 0){
       this.articlesService.articlesList.subscribe((data:any) => {
        this.articles = data;
      });
    }
      console.log(this.articles);
  }
  ajoutPanier(article:any){
    this.articlesService.addPanier(article);
  }
}