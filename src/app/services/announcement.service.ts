import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Announcement } from '../Models/announcement';
import { Category } from '../Models/category';

@Injectable({
  providedIn: 'root'
})
export class AnnouncementService {
  baseURL="https://localhost:44305";
  readonly httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    })
  };
  
  constructor(private httpClient: HttpClient) { }

  serviceCall() {
    console.log("Service was called");
    }

    getAnnouncememnts():Observable<Announcement[]>
    {
      return this.httpClient.get<any[]>(this.baseURL +"/Announcement",this.httpOptions);
    }

    addAnnouncement(announcement:any)
    {
      return this.httpClient.post(this.baseURL+"/Announcement",announcement,this.httpOptions);
    }

    getAnnouncementWithId(id:string)
    {
      return this.httpClient.get<Announcement>(this.baseURL +"/Announcement/"+id,this.httpOptions);
    }

    editAnnouncementWithId(id:string|null,newAnnouncement:any)
    {
      return this.httpClient.put(this.baseURL+"/Announcement/"+id,newAnnouncement,this.httpOptions);

    }

    deleteAnnouncementWithId(id:string|null)
    {
      return this.httpClient.delete(this.baseURL+"/Announcement/"+id,this.httpOptions);
    }
}
