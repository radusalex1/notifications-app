import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Announcement } from '../announcement';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  baseUrl:string='https://newsapi20221108120432.azurewebsites.net';

  announcements: Announcement[] = [
    {
      id:'1',
      author: 'Elena',
      message: 'Nu se tine cursul',
      title: 'Curs',
      category: Category.Course,
      imageUrl:'imageUrl',
    },
    {
      id:'2',
      author: 'Mihai',
      message: 'Nu se tine laboratorul de BRTA',
      title: 'Laborator',
      category: Category.Laboratory,
      imageUrl:'imageUrl',
    },
    {
      id:'3',
      author: 'Iuli',
      message: 'Nu se tine cursul',
      title: 'Curs',
      category: Category.Course,
      imageUrl:'imageUrl',
    },
    {
      id:'4',
      author: 'Elena',
      message: 'Diseara iesim in Times',
      title: 'Party',
      category: Category.General,
      imageUrl:'imageUrl',
    },
  ];
  constructor(private http:HttpClient) { 

  }

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };


  getAnnouncements():Observable<Announcement[]>{
    var result;
    result =  this.http.get<Announcement[]>(this.baseUrl + "/api/Announcements",this.httpOptions);
    return result;
  }

  addAnnoucement(announcement:Announcement):void{
    this.announcements.push(announcement)
  }

  getNextId():string{
    return this.announcements.length.toString();
  }

  deleteAnnouncement(Id:string):void{

    console.log("aici se sterge un anunt cu id-ul ",Id);

    this.http.delete(this.baseUrl + "/api/Announcements/{" + Id+"}",this.httpOptions)
    .subscribe(
      ()=>console.log("done")
    )
  }
}
