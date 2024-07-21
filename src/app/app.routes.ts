import { Routes } from '@angular/router';

export const routes: Routes = [
  {path:'',redirectTo:'/ads',pathMatch:"full"},
  {path:'ads',loadComponent:()=>import('./components/ads/ads.component').then(c=>c.AdsComponent)},
  {path:'register',loadComponent:()=>import('./components/register/register.component').then(c=>c.RegisterComponent)},
  {path:'cat',loadComponent:()=>import('./components/post-ad-cat/post-ad-cat.component').then(c=>c.PostAdCatComponent)},
  {path:'form',loadComponent:()=>import('./components/post-ad-form/post-ad-form.component').then(c=>c.PostAdFormComponent)},
  {path:'login',loadComponent:()=>import('./components/login/login.component').then(c=>c.LoginComponent)},
  {path:'home',loadComponent:()=>import('./components/home/home.component').then(c=>c.HomeComponent)},
  {path:'about',loadComponent:()=>import('./components/about/about.component').then(c=>c.AboutComponent)},
  {path:'contactus',loadComponent:()=>import('./components/contact-us/contact-us.component').then(c=>c.ContactUsComponent)}
];
