import { Injectable } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

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
  serviceCall() {
    console.log("Service was called");
   }

  constructor() { }

  getAnnouncements():Announcement[]{
      return this.announcements;
  }

  addAnnoucement(announcement:Announcement):void{
    this.announcements.push(announcement)
  }
}
