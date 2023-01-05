import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AnnouncementService } from '../services/announcement.service';

@Component({
  selector: 'app-announcment',
  templateUrl: './announcment.component.html',
  styleUrls: ['./announcment.component.scss']
})
export class AnnouncmentComponent implements OnInit {
@Input() message:string ;
@Input() title:String 
@Input() author:string 
@Input() imageURL:string 
@Input() id:string;
@Output() changeDeteced:any = new EventEmitter<any>();

  constructor(private announcementService:AnnouncementService) { }

  ngOnInit(): void {
console.log(this.message,this.imageURL);
  }

  DeleteAnnouncement(id:string)
  {
this.announcementService.deleteAnnouncementWithId(id).subscribe();
this.changeDeteced.emit("")
  }

}
