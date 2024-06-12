import {Injectable, OnInit} from '@angular/core';
import {CategoryModal, SectionsList, SubCategories} from "../../modals/categories.modal";
import {PostsService} from "../posts/posts.service";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService{

  sectionsList: SectionsList = {
    sections: [
      {
        id: 1,
        section: 'Home Services',
        subSections: [
          {catId: 101, category: 'Cleaning'},
          {catId: 102, category: 'Plumbing'}
        ]
      },
      {
        id: 2,
        section: 'Office Services',
        subSections: [
          {catId: 201, category: 'Office Cleaning'},
          {catId: 202, category: 'Maintenance'}
        ]
      },
      {
        id: 3,
        section: 'Event Services',
        subSections: [
          {catId: 301, category: 'Catering'},
          {catId: 302, category: 'Decoration'}
        ]
      },
      {
        id: 4,
        section: 'Transportation Services',
        subSections: [
          {catId: 401, category: 'Delivery'},
          {catId: 402, category: 'Moving'}
        ]
      },
      {
        id: 5,
        section: 'Healthcare Services',
        subSections: [
          {catId: 501, category: 'Nursing'},
          {catId: 502, category: 'Caregiving'}
        ]
      },
      {
        id: 6,
        section: 'IT Services',
        subSections: [
          {catId: 601, category: 'Technical Support'},
          {catId: 602, category: 'Networking'}
        ]
      },
      {
        id: 7,
        section: 'Educational Services',
        subSections: [
          {catId: 701, category: 'Tutoring'},
          {catId: 702, category: 'Training'}
        ]
      },
      {
        id: 8,
        section: 'Construction Services',
        subSections: [
          {catId: 801, category: 'Masonry'},
          {catId: 802, category: 'Carpentry'}
        ]
      },
      {
        id: 9,
        section: 'Personal Services',
        subSections: [
          {catId: 901, category: 'Personal Training'},
          {catId: 902, category: 'Beauty Services'}
        ]
      },
      {
        id: 10,
        section: 'Administrative Services',
        subSections: [
          {catId: 1001, category: 'Data Entry'},
          {catId: 1002, category: 'Virtual Assistance'}
        ]
      }
    ]
  }


  selectedCategoriesList: Array<{mainId:number,main:string,subId:number,sub:string}> =[];

  constructor() { }

  getSectionsList(){
    return this.sectionsList
  }

  setSelectedCategories(value:CategoryModal, subCategory:SubCategories){

    const existingCategoryIndex = this.selectedCategoriesList.findIndex(c=>
      c.mainId === value.id && c.subId === subCategory.catId
    );

    if (existingCategoryIndex > -1) {
      // If the category is already selected, remove it from the list
      this.selectedCategoriesList.splice(existingCategoryIndex, 1);
    } else {
      // If the category is not selected, add it to the list
      this.selectedCategoriesList.push({mainId: value.id,main: value.section,subId: subCategory.catId,sub:subCategory.category});
    }

    console.log(this.selectedCategoriesList);
    this.postsToDisplay()

  }

  postsToDisplay(){

  }
}
