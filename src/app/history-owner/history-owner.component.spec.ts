import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryOwnerComponent } from './history-owner.component';

describe('HistoryOwnerComponent', () => {
  let component: HistoryOwnerComponent;
  let fixture: ComponentFixture<HistoryOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryOwnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
