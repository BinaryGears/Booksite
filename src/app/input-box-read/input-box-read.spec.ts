import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBoxRead } from './input-box-read';

describe('InputBoxRead', () => {
  let component: InputBoxRead;
  let fixture: ComponentFixture<InputBoxRead>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBoxRead]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBoxRead);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
