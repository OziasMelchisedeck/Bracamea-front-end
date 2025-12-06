import { Routes } from '@angular/router';
import { LandingPage } from './landing-page/landing-page';
import { Configuration } from './configuration/configuration';
import { Collections } from './collections/collections';

export const routes: Routes = [
    {path: '', component:LandingPage},
    {path: 'configuration', component:Configuration},
    {path: 'collection', component:Collections},
];
