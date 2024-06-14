import {CategoriesModal, SubCategories} from "./categories.modal";

export interface PostModal{
  id:number;
  title:string;
  location:string;
  description:string;
  shortDescription:string;
  price:number;
  category:SubCategories
  section:CategoriesModal;
  contactNumbers:number[]
}
