import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keys-area',
  templateUrl: './keys-area.component.html',
  styleUrls: ['./keys-area.component.scss']
})
export class KeysAreaComponent implements OnInit {
  numbers = ['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', '0', '.', '=', '+' ]

  constructor() { }

  ngOnInit(): void {
    
  }

}
