import ActionsCounter from '../actions/counter.js';

const initialState = {
  number: 0
};

export default function counter(state=initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ActionsCounter.ADD:
    case ActionsCounter.SUBTRACT:
      return {
        ...state,
        ...payload
      };
    default:
      return state;
  }
}
