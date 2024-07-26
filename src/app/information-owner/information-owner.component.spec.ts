import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationOwnerComponent } from './information-owner.component';

describe('InformationOwnerComponent', () => {
  let component: InformationOwnerComponent;
  let fixture: ComponentFixture<InformationOwnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationOwnerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
