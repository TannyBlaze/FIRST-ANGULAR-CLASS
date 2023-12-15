import { Component } from '@angular/core';
interface DetailsSchema{
    firstname: string,
    lastname: string,
    age: number,
    school: string,
    email: string
}
@Component({
  selector: 'app-landingpage',
  standalone: true,
  imports: [],
  templateUrl: './landingpage.component.html',
  styleUrl: './landingpage.component.css'
})
export class LandingpageComponent {
  public name: string = 'SQI';
  private school: string = 'LAUTECH';
  public ages: number = 20;
  public isAdmin: boolean = false;
  public obj:DetailsSchema = {
    firstname: 'John',
    lastname: 'Lee',
    age: 20,
    school: 'LAUTECH',
    email: 'toye@gmail.com'
  }


  public age: number | string = 20;
  public nickname: undefined | string
  public email: undefined | string
  
  ngOnInit() {
    console.log(this.name, this.school, this.ages, this.isAdmin);
    this.age = 'Fourteen';
    this.nickname = 'SQI';
    console.log(this.age, this.nickname);
    console.log(this.email);
    this.email = 'sqi@gmail.com';
    console.log(this.email);
  }

  myname() { 
    console.log(this.school);
  }
}
