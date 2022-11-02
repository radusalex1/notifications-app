import { Component, Input, OnInit } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})

export class AnnouncementComponent implements OnInit {

 @Input('announc') announcement:Announcement=
 {id:"",author:"",message:"", title:"", category:Category.General,
  imageUrl:""};

  constructor() { }

  ngOnInit(): void {
  }

}
