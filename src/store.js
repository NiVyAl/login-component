import { createStore } from 'redux';

function counter(state = 0, action) {
	switch (action.type) {
	  case 'INCREMENT':
		 return state + 1
	  case 'DECREMENT':
		 return state - 1
	  default:
		 return state
	}
};

 function loginToggle(state= "close", action) {
	 state = action.type;
	 return state
 }
 
export let store = createStore(loginToggle);

// store.subscribe(() => console.log(store.getState())); // подписались на событие (при изменении срабатывает console.log)
// store.dispatch({ type: 'INCREMENT' }); 
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'DECREMENT' });