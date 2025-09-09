import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button-back',
  imports: [],
  templateUrl: './button-back.html',
  styleUrl: './button-back.css'
})

export class ButtonBack {
  show: boolean;

  constructor() {
    this.show = false;
  }

  @Output() public showEvent = new EventEmitter<boolean>();
  
  clickBackButton(): void{
    this.show = !this.show;
    this.showEvent.emit(this.show);
  }
}
