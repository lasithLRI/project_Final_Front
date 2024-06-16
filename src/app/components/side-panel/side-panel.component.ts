import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";

import {CategoriesService} from "../../services/categories/categories.service";
import {CategoriesModal, SubCategories} from "../../modals/categories.modal";


@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [
    NgForOf

  ],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.css'
})
export class SidePanelComponent{

  constructor(private categoriesService:CategoriesService) {
  }

  tempCategories = this.categoriesService.tempCategories


  categoriesOnClick = (category: CategoriesModal, subCategory: SubCategories): void => {

    const existingCategoryIndex = this.categoriesService.selectedCategoryArray.findIndex((c)=>
      c.categoryId === category.id && c.subCategoryId === subCategory.subId
    );

    if (existingCategoryIndex > -1) {
      // If already selected, remove it
      this.categoriesService.selectedCategoryArray.splice(existingCategoryIndex, 1);
    } else {
      // If not selected, add it
      this.categoriesService.selectedCategoryArray.push({ categoryId: category.id, subCategoryId: subCategory.subId });
    }

  }

}
