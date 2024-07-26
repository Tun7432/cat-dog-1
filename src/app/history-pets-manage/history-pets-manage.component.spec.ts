import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPetsManageComponent } from './history-pets-manage.component';

describe('HistoryPetsManageComponent', () => {
  let component: HistoryPetsManageComponent;
  let fixture: ComponentFixture<HistoryPetsManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistoryPetsManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HistoryPetsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
