import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationGeographicComponent } from './information-geographic.component';

describe('InformationGeographicComponent', () => {
  let component: InformationGeographicComponent;
  let fixture: ComponentFixture<InformationGeographicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationGeographicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationGeographicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
