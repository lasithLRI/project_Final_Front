import { Component } from '@angular/core';
import {CategoriesService} from "../../services/categories/categories.service";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {AccordionModule} from "primeng/accordion";

@Component({
  selector: 'app-post-ad-cat',
  standalone: true,
  imports: [
    NgForOf,
    AccordionModule
  ],
  templateUrl: './post-ad-cat.component.html',
  styleUrl: './post-ad-cat.component.css'
})
export class PostAdCatComponent {
  constructor(private categoriesService:CategoriesService, private route: Router) {
  }

  catList = this.categoriesService.tempCategories

  startForm() {
    this.route.navigate(['/form']);
  }
}
