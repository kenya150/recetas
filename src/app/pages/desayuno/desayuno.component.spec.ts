import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesayunoComponent } from './desayuno.component';

describe('DesayunoComponent', () => {
  let component: DesayunoComponent;
  let fixture: ComponentFixture<DesayunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DesayunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesayunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
