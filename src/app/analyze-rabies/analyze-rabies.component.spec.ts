import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeRabiesComponent } from './analyze-rabies.component';

describe('AnalyzeRabiesComponent', () => {
  let component: AnalyzeRabiesComponent;
  let fixture: ComponentFixture<AnalyzeRabiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzeRabiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyzeRabiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
