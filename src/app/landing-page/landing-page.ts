import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Articles } from '../articles';

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink],
  templateUrl: './landing-page.html',
  styleUrl: './landing-page.scss',
})
export class LandingPage implements OnInit{
  constructor(
    private articlesService: Articles
  ) {}

  ngOnInit(): void {
    this.articlesService.getArticles().subscribe();
  }
}
