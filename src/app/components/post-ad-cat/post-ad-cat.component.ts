import { Component } from '@angular/core';
import {CategoriesService} from "../../services/categories/categories.service";
import {NgForOf} from "@angular/common";
import {Router} from "@angular/router";
import {AccordionModule} from "primeng/accordion";
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";

@Component({
  selector: 'app-post-ad-cat',
  standalone: true,
  imports: [
    NgForOf,
    AccordionModule,
    HeaderComponent,
    FooterComponent
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
