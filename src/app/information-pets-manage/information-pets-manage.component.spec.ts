import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationPetsManageComponent } from './information-pets-manage.component';

describe('InformationPetsManageComponent', () => {
  let component: InformationPetsManageComponent;
  let fixture: ComponentFixture<InformationPetsManageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformationPetsManageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformationPetsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
