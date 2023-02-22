import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator-component', //put this selector in app.component.html >> make a tag
  templateUrl: './calculator-component.component.html',
  styleUrls: ['./calculator-component.component.css'],
})
export class CalculatorComponentComponent {
  public result: number;
  public n1: number;
  public n2: number;

  onKey1(event: any) {
    this.n1 = Number(event.target.value);
    console.log(this.n1);
  }

  onKey2(event: any) {
    this.n2 = Number(event.target.value);
    console.log(this.n2);
  }

  constructor() {
    this.n1 = 0;
    this.n2 = 0;
    this.result = 0;
  }

  add() {
    this.result = this.n1 + this.n2;
  }

  sub() {
    this.result = this.n1 - this.n2;
  }

  multiply() {
    this.result = this.n1 * this.n2;
  }

  divide() {
    this.result = this.n1 / this.n2;
  }
}
