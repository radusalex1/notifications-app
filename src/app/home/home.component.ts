import { Component, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';
import { NotificationServiceService } from '../services/notification-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  title = 'notifications-app';

  selectedCategory:string;
  notificationMessage:string;

  announcements: Announcement[]=[];

  constructor ( private announcementService: AnnouncementService,private notificationService:NotificationServiceService ){
  }
  
  receiveCategory(category:string):void{
    this.selectedCategory=category
    console.log("Selected category: ",this.selectedCategory)
  }

  ngOnInit():void{

    debugger;
    this.notificationService.initWebSocket();

    this.notificationService.notificationSubject.subscribe(hasNotifications => this.notificationMessage = hasNotifications ? "Notification list changed, please refresh" : "");

    this.announcementService.getAnnouncements().subscribe(data => {
      this.announcements = data;
    })
    
  }
}
