import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPetsComponent } from './history-pets.component';

describe('HistoryPetsComponent', () => {
  let component: HistoryPetsComponent;
  let fixture: ComponentFixture<HistoryPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryPetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
