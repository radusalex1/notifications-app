import { Injectable } from '@angular/core';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories:Category[] =
  [
   Category.All,
    Category.Course,
   Category.General,
   Category.Laboratory
  ]

  categoriesString:string[] = 
  [
    Category[Category.All],
    Category[Category.Course],
    Category[Category.General],
    Category[Category.Laboratory]
  ]
  
  constructor() { }

  getCategories()
  {
    return this.categories;
  }

  getCategoriesAsString()
  {
    return this.categoriesString;
  }
}
