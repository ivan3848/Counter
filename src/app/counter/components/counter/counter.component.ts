import { Component } from '@angular/core';

@Component({
    selector: 'app-counter',
    templateUrl: './counter.component.html'
})

export class CounterComponent {
    public count: number = 0;

  public increaseBy( value:number ): void{
    this.count += value;

    if (this.count == 10) {
      alert("YOU WIN!!!");
      this.resetCounter();
    }
  }

  public resetCounter(): void{
    this.count = 0;
    alert("Start again");
  }
}