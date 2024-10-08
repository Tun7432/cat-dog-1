import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPetsComponent } from './information-pets.component';

describe('InformationPetsComponent', () => {
  let component: InformationPetsComponent;
  let fixture: ComponentFixture<InformationPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationPetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
