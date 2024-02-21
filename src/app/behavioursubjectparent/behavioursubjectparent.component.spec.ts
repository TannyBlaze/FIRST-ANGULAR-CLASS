import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehavioursubjectparentComponent } from './behavioursubjectparent.component';

describe('BehavioursubjectparentComponent', () => {
  let component: BehavioursubjectparentComponent;
  let fixture: ComponentFixture<BehavioursubjectparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehavioursubjectparentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BehavioursubjectparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
