import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',redirectTo:'/ads',pathMatch:"full"},
  {path:'ads',loadComponent:()=>import('./components/ads/ads.component').then(c=>c.AdsComponent)},
  {path:'register',loadComponent:()=>import('./components/signup/signup.component').then(c=>c.SignupComponent)},
  {path:'add',loadComponent:()=>import('./components/post-ad-cat/post-ad-cat.component').then(c=>c.PostAdCatComponent)},
];
