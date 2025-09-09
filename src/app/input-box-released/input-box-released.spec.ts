import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBoxReleased } from './input-box-released';

describe('InputBoxReleased', () => {
  let component: InputBoxReleased;
  let fixture: ComponentFixture<InputBoxReleased>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBoxReleased]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBoxReleased);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
