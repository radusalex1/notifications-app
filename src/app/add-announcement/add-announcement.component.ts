import { Component, OnInit } from '@angular/core';
import { Category } from '../category';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit {

  categories:Category[]=Object.values(Category);
  newCategory:Category=Category.Course;
  newDescription:string="";
  newTitle:string="";
  constructor() { }

  ngOnInit(): void {
  }

  addNote():void{
    
  }

}
