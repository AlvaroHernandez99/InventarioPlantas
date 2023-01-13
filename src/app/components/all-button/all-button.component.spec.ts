import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllButtonComponent } from './all-button.component';

describe('AllButtonComponent', () => {
  let component: AllButtonComponent;
  let fixture: ComponentFixture<AllButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
