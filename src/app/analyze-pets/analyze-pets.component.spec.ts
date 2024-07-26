import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzePetsComponent } from './analyze-pets.component';

describe('AnalyzePetsComponent', () => {
  let component: AnalyzePetsComponent;
  let fixture: ComponentFixture<AnalyzePetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzePetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyzePetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
