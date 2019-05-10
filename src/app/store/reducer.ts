import { Actions, ActionTypes } from "./actions";

export const initialState = <object[]>[
  { id: "1", val: 2 },
  { id: "2", val: 4, blah: "buh" }
];

export function reducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.Push:
      state.push(action.data);
      return state;
    case ActionTypes.Pop:
      state.pop();
      return state;
    case ActionTypes.Reset:
      return initialState;
    default:
      return state;
  }
}
