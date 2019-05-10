import { Actions, ActionTypes } from "./actions";

export const initialState = <object[]>[
  { id: "1", val: 2 },
  { id: "2", val: 4, blah: "buh" }
];

export function counterReducer(state = initialState, action: Actions) {
  switch (action.type) {
    case ActionTypes.Push:
      return state.push(action.data);
    case ActionTypes.Pop:
      return state.pop();
    case ActionTypes.Reset:
      return initialState;
    default:
      return state;
  }
}
