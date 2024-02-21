import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class BehaviourService {

    constructor() { }
    public behaviour = new BehaviorSubject<any>({
        name: 'Bella',
        age: 30
    });
}
