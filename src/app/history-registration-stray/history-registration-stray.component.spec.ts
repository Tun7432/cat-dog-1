import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRegistrationStrayComponent } from './history-registration-stray.component';

describe('HistoryRegistrationStrayComponent', () => {
  let component: HistoryRegistrationStrayComponent;
  let fixture: ComponentFixture<HistoryRegistrationStrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryRegistrationStrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryRegistrationStrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
