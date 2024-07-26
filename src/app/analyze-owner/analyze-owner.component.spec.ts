import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeOwnerComponent } from './analyze-owner.component';

describe('AnalyzeOwnerComponent', () => {
  let component: AnalyzeOwnerComponent;
  let fixture: ComponentFixture<AnalyzeOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzeOwnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyzeOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
