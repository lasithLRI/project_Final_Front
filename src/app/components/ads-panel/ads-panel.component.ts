import {Component, OnInit} from '@angular/core';

import {CurrencyPipe, NgForOf} from "@angular/common";

import {CategoriesService} from "../../services/categories/categories.service";
import {PostsService} from "../../services/posts/posts.service";


@Component({
  selector: 'app-ads-panel',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe

  ],
  templateUrl: './ads-panel.component.html',
  styleUrl: './ads-panel.component.css'
})
export class AdsPanelComponent{



  constructor(private postsService:PostsService) {

  }

  postsListToDisplay=this.postsService


}
