export interface CategoriesModal{
  id:number;
  section:string;
  subCats:Array<SubCategories>
}

export interface SubCategories{
  subId:number;
  subCatName:string;
}
