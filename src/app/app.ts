import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonAdd } from './button-add/button-add';
import { DisplayBoxBooks } from "./display-box-books/display-box-books";
import { ButtonFilter } from './button-filter/button-filter';
import { InputBoxSearch } from './input-box-search/input-box-search';
import { ButtonSubmit } from './button-submit/button-submit';
import { ButtonBack } from './button-back/button-back';
import { InputBoxTitle } from './input-box-title/input-box-title';
import { InputBoxOwned } from './input-box-owned/input-box-owned';
import { InputBoxRead } from './input-box-read/input-box-read';
import { InputBoxReleased } from './input-box-released/input-box-released';
import { InputBoxDate } from './input-box-date/input-box-date';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonAdd, ButtonFilter, InputBoxSearch, 
    DisplayBoxBooks, ButtonSubmit, ButtonBack, InputBoxTitle, InputBoxOwned,
  InputBoxRead, InputBoxReleased, InputBoxDate],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  message: boolean = true;

  constructor() {
    this.message = true;
  }
  
  public onAddButtonClick(value: any): void {
    this.message = value;
  }

  public onBackButtonClick(value: any): void {
    this.message = value;
  }
  protected readonly title = signal('booksite');
}
