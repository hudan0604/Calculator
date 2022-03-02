import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-area',
  templateUrl: './result-area.component.html',
  styleUrls: ['./result-area.component.scss']
})
export class ResultAreaComponent {
@Input() detail: string | undefined
@Input() result: string | undefined
}
