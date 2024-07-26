import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationOwnerComponent } from './registration-owner.component';

describe('RegistrationOwnerComponent', () => {
  let component: RegistrationOwnerComponent;
  let fixture: ComponentFixture<RegistrationOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationOwnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegistrationOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
