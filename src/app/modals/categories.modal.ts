export interface CategoryModal{
  id:number;
  section:string;
  subSections:Array<SubCategories>;
}

export interface SectionsList{
  sections:Array<CategoryModal>
}

export interface SubCategories{
  catId:number;
  category:string;
}

export interface itemCategory{
  id:number;
  section:string
  subSections:SubCategories[];
}
