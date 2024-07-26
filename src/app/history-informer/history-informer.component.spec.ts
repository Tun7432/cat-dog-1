import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryInformerComponent } from './history-informer.component';

describe('HistoryInformerComponent', () => {
  let component: HistoryInformerComponent;
  let fixture: ComponentFixture<HistoryInformerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryInformerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryInformerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
