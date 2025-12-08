import { Component, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Articles } from './articles';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit{
  constructor(private articlesServices: Articles) {}
  ngOnInit(): void {
    // Initialization logic can go here
   if(!this.articlesServices.loading){
    this.articlesServices.getArticles().subscribe();
   }
  }
  protected readonly title = signal('bracamea-frontend');
}
