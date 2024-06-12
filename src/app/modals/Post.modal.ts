import {itemCategory} from "./categories.modal";

export interface PostModal{
  id:number;
  title:string;
  description:string;
  shortDescription:string;
  images:Array<Images>;
  location:string;
  price:number;
  category: itemCategory;
}

export interface Images{
  id:number;
  urls:string
}


export interface PostsList{
  postList:Array<PostModal>
}
