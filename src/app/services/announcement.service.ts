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

  baseUrl:string="https://localhost:44305"
  
  constructor(private httpClient: HttpClient) { }

  readonly httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Response-Type':"text",
 
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
    return this.httpClient.post(this.baseUrl+"/Announcement",announcement,this.httpOptions);
  }

  deleteAnnouncement(Id:string):Observable<unknown>{
    return this.httpClient.delete(this.baseUrl + "/Announcement/"+Id,this.httpOptions)
  }

  updateAnnouncement(announcement:Announcement):Observable<unknown>{
    return this.httpClient.put(this.baseUrl + "/Announcement?id=" +announcement.id,announcement,this.httpOptions)
  }
}
