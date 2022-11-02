import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
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
    this.announcementService.serviceCall();
    this.announcements=this.announcementService.getAnnouncements();
  }
}
