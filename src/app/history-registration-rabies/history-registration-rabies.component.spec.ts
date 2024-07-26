import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRegistrationRabiesComponent } from './history-registration-rabies.component';

describe('HistoryRegistrationRabiesComponent', () => {
  let component: HistoryRegistrationRabiesComponent;
  let fixture: ComponentFixture<HistoryRegistrationRabiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryRegistrationRabiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryRegistrationRabiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
