export const CounterComponent = {
  init(store={}, actionCreatorsCounter={}) {
    this.store = store;
    this.actionCreatorsCounter = actionCreatorsCounter;

    this.buttonAdd$     = document.getElementById('counter-add');
    this.buttonSubract$ = document.getElementById('counter-subtract');
    this.counterNumber$ = document.getElementById('counter-number');

    this.buttonAdd$.addEventListener('click',
      this.actionCreatorsCounter.add
    );

    this.buttonSubract$.addEventListener('click',
      this.actionCreatorsCounter.subtract
    );

    this.render();
  },

  render() {
    const store = this.store;

    store.subscribe(() => {
      const state = store.getState();
      this.counterNumber$.textContent = state.counter.number;
    });
  }
};
