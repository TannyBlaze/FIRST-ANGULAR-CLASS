import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactiveform.component.html',
  styleUrl: './reactiveform.component.css'
})
export class ReactiveformComponent {
  constructor(public formbuilder: FormBuilder) { }
  public formone = this.formbuilder.group({
    firstname: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(12),Validators.maxLength(30)]],
  })

  ngOnInit() {
    console.log(this.formone.value);
  }
}
