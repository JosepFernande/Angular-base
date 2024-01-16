import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}} </h3>
  <button (click)="increaseBy(1)">+1</button>
  <button style="margin-left: 5px; margin-right: 5px;" (click)="reset()" > Reset </button>
  <button (click)="increaseBy(-1)" > -1</button>
  `
})
export class CounterComponent {
  constructor() { }

  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  reset(): void {
    this.counter = 10;
  }
}
