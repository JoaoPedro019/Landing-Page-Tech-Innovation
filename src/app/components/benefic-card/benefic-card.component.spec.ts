import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeneficCardComponent } from './benefic-card.component';

describe('BeneficCardComponent', () => {
  let component: BeneficCardComponent;
  let fixture: ComponentFixture<BeneficCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeneficCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BeneficCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
