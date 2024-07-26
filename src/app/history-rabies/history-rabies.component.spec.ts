import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRabiesComponent } from './history-rabies.component';

describe('HistoryRabiesComponent', () => {
  let component: HistoryRabiesComponent;
  let fixture: ComponentFixture<HistoryRabiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryRabiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryRabiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
