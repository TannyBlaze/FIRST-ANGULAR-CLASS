import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-displaycontacts',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './displaycontacts.component.html',
  styleUrl: './displaycontacts.component.css'
})
export class DisplaycontactsComponent {
  constructor(public activated: ActivatedRoute, public routes: Router) { }
  public index = 0
  public detail:any= [] 
  ngOnInit() {
    this.detail = JSON.parse(localStorage['details'])
    console.log(this.detail);

    this.index = this.activated.snapshot.params['i']
    console.log(this.index);

    console.log(this.detail[this.index]);
    
  }
  check() {
  this.routes.navigate(['home']);
  }
}