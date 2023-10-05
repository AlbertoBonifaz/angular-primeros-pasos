import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>counter: {{ counter }}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="increaseBy(-1)">-1</button>
    <button (click)="resert()">reset</button>
  `,
})
export class CounterComponent {
  public counter: number = 15;

  increaseBy(value: number): void {
    this.counter += value;
  }
  resert(): void {
    this.counter = 11;
  }
  constructor() {}
}
