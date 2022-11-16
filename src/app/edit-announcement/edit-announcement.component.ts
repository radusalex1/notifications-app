import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Announcement } from '../announcement';
import { AnnouncementComponent } from '../announcement/announcement.component';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.scss']
})
export class EditAnnouncementComponent implements OnInit {

  titleFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  authorFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  messageFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  imageURLFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  categoryFormControl = new FormControl('', [Validators.required])
  
  categories:Category[]=Object.values(Category);

  announcement?:Announcement;

  newMessage?:string="";
  newTitle?:string="";
  newAuthor?:string="";
  newCategory?:Category=Category.None;
  newImageUrl?:string="";

  constructor(private route: ActivatedRoute, private announcementService: AnnouncementService) {}
  
  ngOnInit() {
    
   let id = this.route.snapshot.paramMap.get('id');
    if(id!=null)
    {
      this.announcementService.getAnnouncementById(id).subscribe(data=>
        this.announcement=data)
    } 
    console.log(this.announcement)
    
    this.newMessage=this.announcement?.message
    this.newTitle=this.announcement?.title
    this.newAuthor=this.announcement?.author
    this.newCategory=this.announcement?.category
    this.newImageUrl=this.announcement?.imageUrl
  }

}
