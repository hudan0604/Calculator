import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  detailOfTheOperation: string | undefined = '';
  resultOfOperation: string | undefined;

  setValForResultsSection(val: string) {
   this.detailOfTheOperation += val;
   this.resultOfOperation = eval(this.detailOfTheOperation as string)
  }

}
