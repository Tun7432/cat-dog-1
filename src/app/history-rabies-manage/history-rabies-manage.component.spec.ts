import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryRabiesManageComponent } from './history-rabies-manage.component';

describe('HistoryRabiesManageComponent', () => {
  let component: HistoryRabiesManageComponent;
  let fixture: ComponentFixture<HistoryRabiesManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryRabiesManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryRabiesManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
