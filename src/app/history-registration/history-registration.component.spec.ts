import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRegistrationComponent } from './history-registration.component';

describe('HistoryRegistrationComponent', () => {
  let component: HistoryRegistrationComponent;
  let fixture: ComponentFixture<HistoryRegistrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryRegistrationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryRegistrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
