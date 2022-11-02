import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

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

  constructor ( private announcementService: AnnouncementService ){

  }

  ngOnInit(): void {
  }

  addNote():void{
    console.log("ADDED")
    

    const annouc:Announcement={
      id:"",
      message: "",
      title: "",
      author:"",
      category:Category.General,
      imageUrl:""
    }
    this.announcementService.addAnnoucement(annouc);

  }



}
