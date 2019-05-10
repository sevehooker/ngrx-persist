import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Push, Pop } from "../store/actions";

@Component({
  selector: "muck-up",
  template: `
    <muck-up-C (push)="(push)" (pop)="(pop)"></muck-up-C>
  `
})
export class MuckUpContainer {
  constructor(public store: Store<any>) {}

  push() {
    this.store.dispatch(new Push({ id: Math.random(), val: 0 }));
  }
  pop() {
    this.store.dispatch(new Pop());
  }
}
