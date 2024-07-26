import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeSearchRabiesComponent } from './analyze-search-rabies.component';

describe('AnalyzeSearchRabiesComponent', () => {
  let component: AnalyzeSearchRabiesComponent;
  let fixture: ComponentFixture<AnalyzeSearchRabiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzeSearchRabiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyzeSearchRabiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
