import {Component, OnInit} from '@angular/core';

import {CurrencyPipe, NgForOf} from "@angular/common";

import {CategoriesService} from "../../services/categories/categories.service";
import {PostsService} from "../../services/posts/posts.service";
import {ProductService} from "../../services/product/product.service";
import {ProductsComponent} from "../products/products.component";
import {PostModal} from "../../modals/Post.modal";
import {FooterComponent} from "../footer/footer.component";


@Component({
  selector: 'app-ads-panel',
  standalone: true,
  imports: [
    NgForOf,
    CurrencyPipe,
    ProductsComponent,
    FooterComponent

  ],
  templateUrl: './ads-panel.component.html',
  styleUrl: './ads-panel.component.css'
})
export class AdsPanelComponent{



  constructor(private postsService:PostsService, private productService:ProductService) {

  }

  postsListToDisplay=this.postsService

  productServiceFunction = {
    openProduct: (post:PostModal) => {
      this.productService.openProduct(post);
    }
  };

}
