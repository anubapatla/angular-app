import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{MatCardModule,} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './common/about/about.component';
import { CommonModule } from '@angular/common';
import { ReversePipe } from './custom/reverse.pipe';
import { FormsModule } from '@angular/forms';
import { AdminModule } from "./admin/admin.module";
import { DashboardComponent } from "./admin/dashboard/dashboard.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatCardModule, HomeComponent, FormsModule, CommonModule, ReversePipe, AdminModule, AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular 18 tutirioals';
  subtitle='angular tutioals for beginners'
  todaydate=new Date();
  salary=10000;
  _obj={"name":"ANU"};
  isdisabled=true;
  Changetitle(){
    this.title="angular 18 full tutorial"}
    updatetitle(event:any){
   this.title=event.target.value;
    
  }
}
