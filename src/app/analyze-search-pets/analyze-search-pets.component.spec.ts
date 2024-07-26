import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyzeSearchPetsComponent } from './analyze-search-pets.component';

describe('AnalyzeSearchPetsComponent', () => {
  let component: AnalyzeSearchPetsComponent;
  let fixture: ComponentFixture<AnalyzeSearchPetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnalyzeSearchPetsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalyzeSearchPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
