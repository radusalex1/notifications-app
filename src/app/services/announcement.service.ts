import { Announcement } from './../announcement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  //baseUrl:string='https://newsapi20221108120432.azurewebsites.net';

  // getAllUrl:string="https://localhost:44305/api/Announcement"
  // getByIdUrl:string="https://localhost:44305/api/Announcement/";
  // addAnnouncUrl:string="https://localhost:44305/api/Announcement";

  baseUrl:string="https://localhost:44305"
  
  constructor(private httpClient: HttpClient) { }

  readonly httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    })
  };

  getAnnouncementById(id:string):Observable<Announcement>{
    debugger;
    return this.httpClient.get<Announcement>(this.baseUrl +"/Announcement/"+id,this.httpOptions);
  }

  getAnnouncements():Observable<Announcement[]>{
    return this.httpClient.get<Announcement[]>(this.baseUrl+"/Announcement",this.httpOptions);
  }

  addAnnouncement(announcement:any)
  {
    debugger;
    return this.httpClient.post("https://localhost:44305/Announcement",announcement,this.httpOptions);
  }

  deleteAnnouncement(Id:string):Observable<unknown>{
    return this.httpClient.delete(this.baseUrl + "/api/Announcements/{"+Id+"}",this.httpOptions)
  }

  updateAnnouncement(announcement:Announcement):Observable<unknown>{
    return this.httpClient.put(this.baseUrl + "/api/Announcements/{" +announcement.id +"}",announcement,this.httpOptions)
  }
}
