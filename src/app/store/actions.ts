import { Action } from "@ngrx/store";

export enum ActionTypes {
  Push = "Push",
  Pop = "Pop",
  Reset = "Reset",
  Persist = "Persist"
}

export class Push implements Action {
  readonly type = ActionTypes.Push;
  constructor(public data: object) {}
}

export class Pop implements Action {
  readonly type = ActionTypes.Pop;
}

export class Reset implements Action {
  readonly type = ActionTypes.Reset;
}

export class Persist implements Action {
  readonly type = ActionTypes.Persist;
}

export type Actions = Push | Pop | Reset | Persist;
