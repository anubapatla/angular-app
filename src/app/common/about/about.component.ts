import { Component } from '@angular/core';
import { HomeComponent } from "../../home/home.component";
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-about',
  imports: [HomeComponent, AppComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
