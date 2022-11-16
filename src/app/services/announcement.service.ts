import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Announcement } from '../announcement';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  baseUrl:string='https://newsapi20221108120432.azurewebsites.net';

  constructor(private http:HttpClient) {

  }

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };


  getAnnouncements():Observable<Announcement[]>{
    return this.http.get<Announcement[]>(this.baseUrl + "/api/Announcements",this.httpOptions);
  }

  addAnnoucement(announcement:Announcement):Observable<Announcement>{
    return this.http.post<Announcement>(this.baseUrl+"/api/Announcements",announcement,this.httpOptions)
  }

  deleteAnnouncement(Id:string):Observable<unknown>{
    return this.http.delete(this.baseUrl + "/api/Announcements/{" + Id+"}",this.httpOptions)
  }
}
