import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationStrayComponent } from './registration-stray.component';

describe('RegistrationStrayComponent', () => {
  let component: RegistrationStrayComponent;
  let fixture: ComponentFixture<RegistrationStrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationStrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationStrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
