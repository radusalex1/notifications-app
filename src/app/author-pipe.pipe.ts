import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'authorPipe'
})
export class AuthorPipePipe implements PipeTransform {

  transform(value: string): string {
    return "By " + value;
  }

}
