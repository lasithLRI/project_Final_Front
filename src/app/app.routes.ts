import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',redirectTo:'/ads',pathMatch:"full"},
  {path:'ads',loadComponent:()=>import('./components/ads/ads.component').then(c=>c.AdsComponent)},
  {path:'register',loadComponent:()=>import('./components/signup/signup.component').then(c=>c.SignupComponent)},
  {path:'add',loadComponent:()=>import('./components/post-ad-cat/post-ad-cat.component').then(c=>c.PostAdCatComponent)},
  {path:'form',loadComponent:()=>import('./components/post-ad-form/post-ad-form.component').then(c=>c.PostAdFormComponent)},
  {path:'login',loadComponent:()=>import('./components/login/login.component').then(c=>c.LoginComponent)},
  {path:'btn',loadComponent:()=>import('./components/float-btn/float-btn.component').then(c=>c.FloatBtnComponent)},
];
