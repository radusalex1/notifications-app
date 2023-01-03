import { Category } from "./category";

export interface Announcement {
    id:string;
    message:string;
    title:string;
    author:string;
    category:Category;
    category_id:string;
    imageUrl:string;
    description:string;
}
