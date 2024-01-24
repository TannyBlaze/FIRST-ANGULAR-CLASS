import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { json } from 'stream/consumers';
interface DetailsSchema{
    firstname: string,
    lastname: string,
    phonenumber: string,
    gender: string,
    address: string,
    email: string
}
@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [ FormsModule,CommonModule ],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  public styles = "text-danger"
  public first_name = "";
  public last_name = "";
  public email = "";
  public phone_number = "";
  public address = "";
  public gender = "";
  public details: DetailsSchema[] = [];
  
  addContent() {
    if (localStorage.getItem("details")) {
      this.details = JSON.parse(localStorage.getItem("details") || '{}');
    } else {
      this.details = [];
    }
    if (this.first_name != "" && this.last_name != "" && this.email != "" && this.phone_number != "" && this.address != "" && this.gender != "")
    { 
      let contactobj: DetailsSchema = {
        firstname: this.first_name,
        lastname: this.last_name,
        email: this.email,
        phonenumber: this.phone_number,
        address: this.address,
        gender: this.gender
      }
      this.details.push(contactobj);
      console.log(this.details);
      localStorage.setItem("details", JSON.stringify(this.details));

      
    }
  }
}

