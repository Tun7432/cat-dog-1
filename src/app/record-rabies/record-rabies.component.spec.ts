import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordRabiesComponent } from './record-rabies.component';

describe('RecordRabiesComponent', () => {
  let component: RecordRabiesComponent;
  let fixture: ComponentFixture<RecordRabiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecordRabiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecordRabiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
