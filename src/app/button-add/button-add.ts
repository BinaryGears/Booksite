import { Component, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-button-add',
  imports: [],
  templateUrl: './button-add.html',
  styleUrl: './button-add.css'
})

export class ButtonAdd {
  show: boolean;

  constructor() {
    this.show = true;
  }

  @Output() public showEvent = new EventEmitter<boolean>();
  
  clickAddButton(): void{
    this.show = !this.show;
    this.showEvent.emit(this.show);
  }
}
