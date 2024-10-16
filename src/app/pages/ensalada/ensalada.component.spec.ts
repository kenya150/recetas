import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsaladaComponent } from './ensalada.component';

describe('EnsaladaComponent', () => {
  let component: EnsaladaComponent;
  let fixture: ComponentFixture<EnsaladaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnsaladaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnsaladaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
