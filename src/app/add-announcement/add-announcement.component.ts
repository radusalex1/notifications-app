import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Announcement } from '../Models/announcement';
import { Category } from '../Models/category';
import { AnnouncementService } from '../services/announcement.service';
import { CategoryService } from '../services/category.service';
import { NotificationServiceService } from '../services/notification-service.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})
export class AddAnnouncementComponent implements OnInit {

  constructor(private announcementService:AnnouncementService,
    private notificationService:NotificationServiceService,
    private route:ActivatedRoute,
    private categoryService:CategoryService) { }

  idRecived:string|null="";
  title:string;
  author:string;
  imageURL:string = "assets/hedgehog.png";
  message:string;
  id:string;
  categories:Category[] =this.categoryService.getCategories();
  announcement:Announcement;
  selectedCategory:Category= Category.All;

  @Output() newAnnouncement = new EventEmitter<Announcement>();
  @Output() editChange = new EventEmitter<any>();

  ngOnInit(): void {
     this.idRecived = this.route.snapshot.paramMap.get('id');
    if(this.idRecived!=null)
    {
      this.announcementService.getAnnouncementWithId(this.idRecived).subscribe(value=>{
        this.title = value.title;
        this.id=value.id;
      this.message=value.message;
      this.selectedCategory=value.category;
      this.author=value.author;
      });
      
    }
  }

  addAnnouncement(){
    let announcement =  {
      author:this.author,
      title:this.title,
      id:this.id,
      imageURL:this.imageURL,
      category:Category[Category.All],
      message:"test"
    }
    if(this.idRecived!=null)
    {
      this.announcementService.editAnnouncementWithId(this.idRecived,announcement).subscribe();
    }
    else
    {
          
    this.announcementService.addAnnouncement(announcement).subscribe(r => this.notificationService.sendMessage("BroadcastMessage", [r]));
    }
    this.editChange.emit("");
  }

}
