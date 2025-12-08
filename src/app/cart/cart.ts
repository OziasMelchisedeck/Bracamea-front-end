import { Component, OnInit } from '@angular/core';
import { Articles } from '../articles';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart implements  OnInit{
  constructor(
    public articlesService: Articles,
    private router: Router
  ) {}

  panierArticles!: any[];
  ngOnInit(): void {
    this.load();
  }
  url ="https://bracamea-backend.onrender.com/public/";
  urlTest ="http://localhost:3000/public/";

  load(){
    this.articlesService.panierArticles.subscribe(articles => {
      this.panierArticles = articles;
    });
  }
  sanitizeUrl(url: string) {
  return encodeURI(url);
  }
  goToCollections(){
    this.router.navigate(['/collection']);
  }

  removeFromCart(article:any){
    this.articlesService.removePanier(article);
    this.load();
  }
  getTotalPrice(): number {
    return this.panierArticles.reduce((total, article) => total + article.prix, 0);
  }    
} 