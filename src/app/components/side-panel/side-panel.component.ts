import {AfterViewInit, Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {CategoryModal, SectionsList, SubCategories} from "../../modals/categories.modal";
import {CategoriesService} from "../../services/categories/categories.service";


@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [
    NgForOf

  ],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.css'
})
export class SidePanelComponent implements OnInit{

  sectionsList: SectionsList | undefined;
  constructor(private categoriesService:CategoriesService) {
  }

  ngOnInit() {
    this.sectionsList = this.categoriesService.getSectionsList();
  }

  onChange(value:CategoryModal, subCategory:SubCategories){
    this.categoriesService.setSelectedCategories(value, subCategory);
  }

}


