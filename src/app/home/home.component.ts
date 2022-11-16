import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'notifications-app';

  selectedCategory:string="All";

  announcements: Announcement[]=[];

  constructor ( private announcementService: AnnouncementService ){

  }
  receiveCategory(category:string):void{
    this.selectedCategory=category
    console.log("Selected category: ",this.selectedCategory)
  }

  ngOnInit():void{
    this.announcementService.getAnnouncements().subscribe(data => {
      this.announcements = data;
    })
  }

  deleteAnnoucement(Id:string):void{
    this.announcementService.deleteAnnouncement(Id).subscribe();
  }
}
