import { Announcement } from './../announcement';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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

  categories: Category[] = Object.values(Category);

  announcement: Announcement | undefined;

  newMessage: string = "";
  newTitle: string = "";
  newAuthor: string = "";
  newCategory: Category = Category.None;
  newImageUrl: string = "";

  constructor(private route: ActivatedRoute, private announcementService: AnnouncementService) { }

  ngOnInit() {

    let id = this.route.snapshot.paramMap.get('id');

    if (id != null) {
      this.announcementService.getAnnouncementById(id).subscribe(data => {
        this.announcement = data,
          this.newAuthor = data.author,
          this.newCategory = data.category,
          this.newMessage = data.message,
          this.newTitle = data.title,
          this.newImageUrl = data.imageUrl
      }
      )
    }
  }

  saveNote() {
    if (this.announcement != null) {
      const anncounc: Announcement = {

        id: this.announcement.id,
        message: this.newMessage,
        title: this.newTitle,
        author: this.newAuthor,
        imageUrl: this.newImageUrl,
        category: this.newCategory,
        category_id: '',
        description:''
      }
      this.announcementService.updateAnnouncement(anncounc).subscribe()
    }
  }

}
