import { Component } from '@angular/core';
import { BehaviourService } from '../services/behaviour.service';

@Component({
  selector: 'app-behaviourchild2',
  standalone: true,
  imports: [],
  templateUrl: './behaviourchild2.component.html',
  styleUrl: './behaviourchild2.component.css'
})
export class Behaviourchild2Component {
  constructor(public behaviour: BehaviourService) { }
  public behaviour_obj:any={}
ngOnInit(): void {
  this.behaviour.behaviour.subscribe(response=>{
    // console.log(response);
    this.behaviour_obj = response;
    console.log(this.behaviour_obj);
  })
}
}
