import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryStrayManageComponent } from './history-stray-manage.component';

describe('HistoryStrayManageComponent', () => {
  let component: HistoryStrayManageComponent;
  let fixture: ComponentFixture<HistoryStrayManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryStrayManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryStrayManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
