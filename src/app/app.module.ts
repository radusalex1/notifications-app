import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthorPipe } from './author.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    AddAnnouncementComponent,
    CategoriesComponent,
    AuthorPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
