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

  ngOnInit(): void {
    console.log(this.articlesService.panierArticles);
    
  }
  url ="https://bracamea-backend.onrender.com/public/";

  sanitizeUrl(url: string) {
  return encodeURI(url);
  }
  goToCollections(){
    this.router.navigate(['/collection']);
  }

  removeFromCart(article:any){
    const index = this.articlesService.panierArticles.indexOf(article);
    if (index > -1) {
      this.articlesService.panierArticles.splice(index, 1);
    }
  }
  getTotalPrice(): number {
    let total = 0;  
    for (let article of this.articlesService.panierArticles) {
      total += article.prix; 
    }
    return total;
  }    
} 