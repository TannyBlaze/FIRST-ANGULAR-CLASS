import { Component } from '@angular/core';
import { LandingpageserviceService } from '../services/landingpageservice.service';

@Component({
  selector: 'app-viewspage',
  standalone: true,
  imports: [],
  templateUrl: './viewspage.component.html',
  styleUrl: './viewspage.component.css'
})
export class ViewspageComponent {
  constructor(public service: LandingpageserviceService) { }
  public user = ''
  
  ngOnInt() {
    console.log(this.service.returnitem());
    this.user = this.service.returnitem();
    console.log(this.user);
  }
}
