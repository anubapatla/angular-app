import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import{MatCardModule,} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './common/about/about.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,MatCardModule,HomeComponent,AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ui-app';
}
