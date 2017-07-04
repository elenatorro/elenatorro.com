import CounterAction from '../actions/counter';


export function add() {
  return (dispatch, getState) => {
    const state = getState();
    const number = state.counter.number + 1;

    dispatch({
      type: CounterAction.ADD,
      payload: {
        number
      }
    });
  };
}

export function subtract() {
  return (dispatch, getState) => {
    const state = getState();
    const number = state.counter.number - 1;

    dispatch({
      type: CounterAction.SUBTRACT,
      payload: {
        number
      }
    });
  };
}
