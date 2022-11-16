import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})

export class AddAnnouncementComponent implements OnInit {

  titleFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  authorFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  messageFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  imageURLFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  categoryFormControl = new FormControl('', [Validators.required])

  categories:Category[]=Object.values(Category);
  newMessage:string="";
  newTitle:string="";
  newAuthor:string="";
  newCategory:Category=Category.None;
  newImageUrl:string="";

  constructor ( private announcementService: AnnouncementService ){
  }

  ngOnInit(): void {
  }

  addAnnouncement():void{
    console.log("ADDED")

    debugger;
    const annouc:Announcement={

      id:"-1",
      message: this.newMessage,
      title: this.newAuthor,
      author:this.newAuthor,
      category:this.newCategory,
      imageUrl:this.newImageUrl
    }
    this.announcementService.addAnnoucement(annouc)
      .subscribe();
  }

}
