import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBoxDate } from './input-box-date';

describe('InputBoxDate', () => {
  let component: InputBoxDate;
  let fixture: ComponentFixture<InputBoxDate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBoxDate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBoxDate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
