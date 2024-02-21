import { Component } from '@angular/core';
import { Behaviourchild1Component } from '../behaviourchild1/behaviourchild1.component';
import { Behaviourchild2Component } from '../behaviourchild2/behaviourchild2.component';

@Component({
  selector: 'app-behavioursubjectparent',
  standalone: true,
  imports: [Behaviourchild1Component,Behaviourchild2Component],
  templateUrl: './behavioursubjectparent.component.html',
  styleUrl: './behavioursubjectparent.component.css'
})
export class BehavioursubjectparentComponent {

}
