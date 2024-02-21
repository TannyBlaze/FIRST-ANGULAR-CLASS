import { Component } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-behaviourchild1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './behaviourchild1.component.html',
  styleUrl: './behaviourchild1.component.css'
})
export class Behaviourchild1Component {
  constructor(public behaviour: BehaviourService) { }
  public array: any = [
    {
      name: "Moyo",
      age: 24
    },
    {
      name: "Lade",
      age: 23
    },
    {
      name: "Jide",
      age: 27
    },
    {
      name: "Nina",
      age: 21
    }
  ]
  sendlist(list:any) {
    this.behaviour.behaviour.next(list)
  }
}
