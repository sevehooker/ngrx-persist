import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { Persist } from "../store/actions";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { selectState } from "../store/selectors";

@Component({
  selector: "persist",
  template: `
    <persist-C [list]="state$ | async" (save)="(save)"></persist-C>
  `
})
export class PersistContainer {
  state$: Observable<object[]>;

  constructor(private store: Store<any>, private router: Router) {
    this.state$ = store.select(selectState);
  }

  save() {
    this.store.dispatch(new Persist());
    this.router.navigate(["/muck-up"]);
  }
}
