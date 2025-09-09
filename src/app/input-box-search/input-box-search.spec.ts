import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputBoxSearch } from './input-box-search';

describe('InputBoxSearch', () => {
  let component: InputBoxSearch;
  let fixture: ComponentFixture<InputBoxSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputBoxSearch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InputBoxSearch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
