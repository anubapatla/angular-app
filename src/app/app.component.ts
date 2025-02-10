import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{MatCardModule,} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './common/about/about.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatCardModule,HomeComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular 18 tutirioals';
  subtitle='angular tutioals for beginners'
  todaydate=new Date();
  salary=10000;
  _obj={"name":"ANU"};
}
