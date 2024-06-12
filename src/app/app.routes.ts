import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',redirectTo:'/ads',pathMatch:"full"},
  {path:'ads',loadComponent:()=>import('./components/ads/ads.component').then(c=>c.AdsComponent)},
];
