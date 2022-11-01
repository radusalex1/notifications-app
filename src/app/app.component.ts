import { Component } from '@angular/core';
import { Announcement } from './announcement';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  title = 'notifications-app';

  selectedCategory:string="All";

  announcements: Announcement[] = [
    {
      id:'1',
      author: 'Elena',
      message: 'Nu se tine cursul',
      title: 'Curs',
      category: Category.Course,
      imageUrl:'imageUrl',
    },
    {
      id:'2',
      author: 'Mihai',
      message: 'Nu se tine laboratorul de BRTA',
      title: 'Laborator',
      category: Category.Laboratory,
      imageUrl:'imageUrl',
    },
    {
      id:'3',
      author: 'Iuli',
      message: 'Nu se tine cursul',
      title: 'Curs',
      category: Category.Course,
      imageUrl:'imageUrl',
    },
    {
      id:'4',
      author: 'Elena',
      message: 'Diseara iesim in Times',
      title: 'Party',
      category: Category.General,
      imageUrl:'imageUrl',
    },
  ];

  receiveCategory(category:string):void{
    this.selectedCategory=category
    console.log("Selected category: ",this.selectedCategory)
  }
}
