import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationAreaComponent } from './information-area.component';

describe('InformationAreaComponent', () => {
  let component: InformationAreaComponent;
  let fixture: ComponentFixture<InformationAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationAreaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
