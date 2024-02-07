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
  selector: 'app-signup',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  constructor(public routes: Router) { }
  public firstname = ''
  public lastname = ''
  public phonenumber = ''
  public gender = ''
  public address = ''
  public email = ''
  public password = ''
  public age = ''
  
  public studentarray: StudentInterface[] = []

  ngOnInit() {
    this.studentarray=JSON.parse(localStorage.getItem('students')!)
  }
  
  signup() {
    let studentobj: StudentInterface = {
      firstname: this.firstname,
      lastname: this.lastname,
      phonenumber: this.phonenumber,
      gender: this.gender,
      address: this.address,
      email: this.email,
      password: this.password,
      age: this.age
    }
    this.studentarray.push(studentobj)
    localStorage.setItem('students', JSON.stringify(this.studentarray))
    if (this.studentarray.push(studentobj)) {
      this.routes.navigate(['/signin'])
    }
    else {
      alert('Signup failed')
    }
  }
}
