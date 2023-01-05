import { Pipe, PipeTransform } from '@angular/core';
import { Category } from './Models/category';

@Pipe({
  name: 'categoryShow'
})
export class CategoryShowPipe implements PipeTransform {

  transform(value: Category): string {
    return Category[value];
  }

}
