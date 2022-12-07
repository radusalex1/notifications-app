import { Announcement } from './../announcement';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { Category } from '../category';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {

  baseUrl:string='https://newsapi20221108120432.azurewebsites.net';

  getAllUrl:string="https://localhost:7017/api/Announcement/GetAll"
  getByIdUrl:string="https://localhost:7017/api/Announcement/"
  addAnnouncUrl:string="https://localhost:7017/api/Announcement"
  constructor(private http:HttpClient) { }

  readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };

  getAnnouncementById(id:string):Observable<Announcement>{
    debugger;
    return this.http.get<Announcement>(this.getByIdUrl+id,this.httpOptions)
  }

  getAnnouncements():Observable<Announcement[]>{
    return this.http.get<Announcement[]>(this.getAllUrl,this.httpOptions);
  }

  addAnnoucement(announcement:Announcement):Observable<Announcement>{
    return this.http.post<Announcement>(this.addAnnouncUrl,announcement,this.httpOptions)
  }

  deleteAnnouncement(Id:string):Observable<unknown>{
    return this.http.delete(this.baseUrl + "/api/Announcements/{" + Id+"}",this.httpOptions)
  }

  updateAnnouncement(announcement:Announcement):Observable<unknown>{
    return this.http.put(this.baseUrl + "/api/Announcements/{" +announcement.id +"}",announcement,this.httpOptions)
  }
}
