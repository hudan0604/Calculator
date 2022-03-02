import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-keys-area',
  templateUrl: './keys-area.component.html',
  styleUrls: ['./keys-area.component.scss']
})
export class KeysAreaComponent {
  numbers = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+', 'C']

  @Output() readonly keySelected = new EventEmitter<string>();
  keyClicked(event: any) {
    const value = event?.target?.innerText;
    this.keySelected.emit(value)
  }

}
