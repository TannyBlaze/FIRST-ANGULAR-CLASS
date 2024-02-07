import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewspageComponent } from './viewspage.component';

describe('ViewspageComponent', () => {
  let component: ViewspageComponent;
  let fixture: ComponentFixture<ViewspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewspageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
