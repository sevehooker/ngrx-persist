import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Push, Pop } from "../store/actions";
import { Observable } from "rxjs";
import { selectState } from "../store/selectors";

@Component({
  selector: "muck-up",
  template: `
    <muck-up-C [list]="state$ | async" (push)="push()" (pop)="pop()"></muck-up-C>
  `
})
export class MuckUpContainer {
  state$: Observable<object[]>;

  constructor(private store: Store<any>) {
    this.state$ = store.select(selectState);
  }

  push() {
    this.store.dispatch(new Push({ id: Math.random(), val: 0 }));
  }
  pop() {
    this.store.dispatch(new Pop());
  }
}
