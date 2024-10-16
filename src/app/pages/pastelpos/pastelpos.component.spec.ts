import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastelposComponent } from './pastelpos.component';

describe('PastelposComponent', () => {
  let component: PastelposComponent;
  let fixture: ComponentFixture<PastelposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PastelposComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PastelposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
