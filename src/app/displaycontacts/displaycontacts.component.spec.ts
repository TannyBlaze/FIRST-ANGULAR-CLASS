import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycontactsComponent } from './displaycontacts.component';

describe('DisplaycontactsComponent', () => {
  let component: DisplaycontactsComponent;
  let fixture: ComponentFixture<DisplaycontactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplaycontactsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisplaycontactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
