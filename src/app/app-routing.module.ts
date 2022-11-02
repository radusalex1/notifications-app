import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { HomeComponent } from './home/home.component';

const routes:Routes=[
  { path: 'add', component: AddAnnouncementComponent },
  { path: '', component: HomeComponent, pathMatch:"full"},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { 
  
}
