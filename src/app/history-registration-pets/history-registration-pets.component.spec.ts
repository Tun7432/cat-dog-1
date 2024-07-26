import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRegistrationPetsComponent } from './history-registration-pets.component';

describe('HistoryRegistrationPetsComponent', () => {
  let component: HistoryRegistrationPetsComponent;
  let fixture: ComponentFixture<HistoryRegistrationPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryRegistrationPetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryRegistrationPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
