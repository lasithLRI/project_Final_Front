import {Injectable,} from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CategoriesService{

  selectedCategoryArray:Array<{ categoryId: number; subCategoryId: number  }> =[];

  constructor() {
  }

}
