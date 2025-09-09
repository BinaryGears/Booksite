import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBoxTitle } from './input-box-title';

describe('InputBoxTitle', () => {
  let component: InputBoxTitle;
  let fixture: ComponentFixture<InputBoxTitle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBoxTitle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBoxTitle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
