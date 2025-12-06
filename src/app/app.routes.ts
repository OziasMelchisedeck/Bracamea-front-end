import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Configuration } from './configuration/configuration';
import { Collections } from './collections/collections';
import { Cart } from './cart/cart';

export const routes: Routes = [
    {path: '', component:LandingPage},
    {path: 'panier', component:Cart},
    {path: 'collection', component:Collections},
];
