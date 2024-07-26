import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryStrayComponent } from './history-stray.component';

describe('HistoryStrayComponent', () => {
  let component: HistoryStrayComponent;
  let fixture: ComponentFixture<HistoryStrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryStrayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryStrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
