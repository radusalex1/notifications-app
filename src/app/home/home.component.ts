import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Announcement } from '../Models/announcement';
import { Category } from '../Models/category';
import { AnnouncementService } from '../services/announcement.service';
import { NotificationServiceService } from '../services/notification-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnChanges {
  title = 'notifications-app';
  announcements:Announcement[];
  shownAnnouncements:Announcement[]=[];
  selectedCategory:string ;
  notificationMessage = "test";
constructor(private announcementService:AnnouncementService, private notificationService:NotificationServiceService)
{

}

  ngOnInit(): void {
    this.notificationService.initWebSocket();
    this.notificationService.notificationSubject.subscribe((hasNotifications: any) => this.notificationMessage = hasNotifications ? "New notifications, please refresh the page" : "");

    this.announcementService.getAnnouncememnts().subscribe((values)=>this.shownAnnouncements=values);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.announcementService.getAnnouncememnts().subscribe((values)=>this.shownAnnouncements=values);
  }
  

  SelectCategory(category:string){
    this.selectedCategory = category;
    this.shownAnnouncements = this.announcements.filter(a => Category[a.category]==category)
  }

  DetectChange(detect:string)
  {
    this.announcementService.getAnnouncememnts().subscribe((values)=>this.shownAnnouncements=values);
  }

  CreateAnnouncement(announcement:Announcement)
  {
    this.announcements.push(announcement);
  }
}
