import {Component, OnInit} from '@angular/core';
import {CategoriesService} from "../../services/categories/categories.service";
import {SectionsList} from "../../modals/categories.modal";
import {CurrencyPipe, NgForOf, NgOptimizedImage} from "@angular/common";
import {PostsList} from "../../modals/Post.modal";
import {PostsService} from "../../services/posts/posts.service";

@Component({
  selector: 'app-ads-panel',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe,
    NgOptimizedImage
  ],
  templateUrl: './ads-panel.component.html',
  styleUrl: './ads-panel.component.css'
})
export class AdsPanelComponent  implements OnInit{
  postsListToDisplay:any[] = []
  ngOnInit() {
    this.filterPosts()
  }

  constructor(private postsService:PostsService) {
  }


  filterPosts(){
    this.postsListToDisplay = this.postsService.postsToDisplay();
  }



}
