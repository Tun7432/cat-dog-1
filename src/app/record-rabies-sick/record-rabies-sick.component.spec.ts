import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordRabiesSickComponent } from './record-rabies-sick.component';

describe('RecordRabiesSickComponent', () => {
  let component: RecordRabiesSickComponent;
  let fixture: ComponentFixture<RecordRabiesSickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordRabiesSickComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordRabiesSickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
