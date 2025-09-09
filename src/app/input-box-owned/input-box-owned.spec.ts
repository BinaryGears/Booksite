import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBoxOwned } from './input-box-owned';

describe('InputBoxOwned', () => {
  let component: InputBoxOwned;
  let fixture: ComponentFixture<InputBoxOwned>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBoxOwned]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBoxOwned);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
