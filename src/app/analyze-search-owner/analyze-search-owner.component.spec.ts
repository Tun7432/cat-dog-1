import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeSearchOwnerComponent } from './analyze-search-owner.component';

describe('AnalyzeSearchOwnerComponent', () => {
  let component: AnalyzeSearchOwnerComponent;
  let fixture: ComponentFixture<AnalyzeSearchOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzeSearchOwnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyzeSearchOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
