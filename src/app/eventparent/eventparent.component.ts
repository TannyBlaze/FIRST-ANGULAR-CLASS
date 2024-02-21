import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EventchildComponent } from '../eventchild/eventchild.component';

@Component({
  selector: 'app-eventparent',
  standalone: true,
  imports: [ FormsModule, EventchildComponent ],
  templateUrl: './eventparent.component.html',
  styleUrl: './eventparent.component.css'
})
export class EventparentComponent {
  public text = ''
  public box = 'Blue'
  public newt = ''
  public data= ''

  send() {
    this.newt = this.text
    console.log(this.newt);
    
  }

  recieveresponce(data: any) {
    this.data = data
  }
}
