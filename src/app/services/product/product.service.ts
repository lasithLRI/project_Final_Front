import { Injectable } from '@angular/core';
import {ProductsComponent} from "../../components/products/products.component";
import {PostModal} from "../../modals/Post.modal";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  postModal: PostModal | undefined;

  openProduct(post:PostModal){
    const modal = document.getElementById('modal');
    if (modal) {
      modal.classList.remove('hidden');
    }

    this.postModal = post;

  }

}
