import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayBoxBooks } from './display-box-books';

describe('DisplayBoxBooks', () => {
  let component: DisplayBoxBooks;
  let fixture: ComponentFixture<DisplayBoxBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayBoxBooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayBoxBooks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
