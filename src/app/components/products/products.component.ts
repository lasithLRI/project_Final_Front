import { Component } from '@angular/core';
import {ProductService} from "../../services/product/product.service";
import {CurrencyPipe, NgForOf, NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgOptimizedImage,
    CurrencyPipe,
    NgForOf
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  constructor(private productService:ProductService) {
  }

  postServiceRef = this.productService

  productServiceFunction = {
    openProduct: this.productService.openProduct.bind(this.productService)
  };

  images = [
    'https://via.placeholder.com/150',
    'https://via.placeholder.com/160',
    'https://via.placeholder.com/170'
  ];

  currentIndex =0;

  changeNextImage(){

       this.currentIndex = (this.currentIndex + 1) % this.images.length;

  }

  changePreviousImage(){

    if (this.currentIndex < 0){
      this.currentIndex = this.images.length
    }

    this.currentIndex = (this.currentIndex - 1) % this.images.length;



  }

  closeProject(){
    const modal = document.getElementById('modal');
    if (modal) {
      modal.classList.add('hidden');
    }


  }


}
