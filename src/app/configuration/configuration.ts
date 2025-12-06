import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-configuration',
  imports: [RouterLink],
  templateUrl: './configuration.html',
  styleUrl: './configuration.scss',
})
export class Configuration implements OnInit{
  constructor() {}

  ngOnInit(): void {
  }
}
