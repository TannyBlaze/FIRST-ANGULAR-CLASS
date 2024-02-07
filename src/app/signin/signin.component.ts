import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

interface StudentInterface{
  firstname: string,
  lastname: string,
  phonenumber: string,
  gender: string,
  address: string,
  email: string
  password: string
  age: string
}

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  constructor(public routes: Router) { }
  public email = ''
  public password = ''
  public message = ''

  public studentarray:StudentInterface[] = []
  ngOnInit() {
    this.studentarray = JSON.parse(localStorage.getItem("student") || '[]')
    console.log(this.studentarray);
  }

  signin() {
    let currentuser = this.studentarray.find((student, index) => student.email === this.email && student.password === this.password)
    console.log(currentuser);
    
    if (currentuser){
      localStorage.setItem("currentuser", JSON.stringify(currentuser))
      this.routes.navigate(['/dashboard'])
    }
    else{
      this.message = "Invalid Email or Password"
    }
  }
}
