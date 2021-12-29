import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgBindingComponent } from './eg-binding.component';

describe('EgBindingComponent', () => {
  let component: EgBindingComponent;
  let fixture: ComponentFixture<EgBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
