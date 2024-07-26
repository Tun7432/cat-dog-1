import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationPetsComponent } from './registration-pets.component';

describe('RegistrationPetsComponent', () => {
  let component: RegistrationPetsComponent;
  let fixture: ComponentFixture<RegistrationPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationPetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
