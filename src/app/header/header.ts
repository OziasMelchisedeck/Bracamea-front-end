import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Articles } from '../articles';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header implements OnInit{
  constructor(
    private articlesService: Articles
  ) {}
  itemCount: number = 0;
  ngOnInit(): void {
    this.articlesService.panierArticles.subscribe(articles => {
      this.itemCount = articles.length;
    });
  }
}
