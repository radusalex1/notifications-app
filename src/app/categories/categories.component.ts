import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Category } from '../Models/category';
import { CategoryService } from '../services/category.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  @Output() selectedCategory = new EventEmitter<string>();
  constructor(private categoryService:CategoryService) { }

  categories:string[] = this.categoryService.getCategoriesAsString();
  ngOnInit(): void {
  }

  click(category:string)
  {
    this.selectedCategory.emit(category)
  }
}
