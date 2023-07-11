import { makeAutoObservable } from "mobx";

class Counter {
  count = 0;
  timer = 60;
  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count = this.count + 1;
    console.log("increment", this.count);
  }

  decrement() {
    this.count = this.count - 1;
    console.log("decrement", this.count);
  }

  get total() {
    return "count + timer" + this.timer + this.count;
  }
}

const counter = new Counter();

export default counter;
