import { createStore } from 'redux';
import axios from 'axios';

// function counter(state = 0, action) {
// 	switch (action.type) {
// 	  case 'INCREMENT':
// 		 return state + 1
// 	  case 'DECREMENT':
// 		 return state - 1
// 	  default:
// 		 return state
// 	}
// };

function loginToggle(state= "close", action) {
	state = action.type;
	return state
}

export let store = createStore(loginToggle);

if (localStorage.getItem("log")) {
	store.dispatch({ type: "log" });
	console.log(store.getState());
}

if (localStorage.getItem("token")) {
	axios.defaults.headers.common.Authorization = localStorage.getItem("token");
}

// store.subscribe(() => console.log(store.getState())); // подписались на событие (при изменении срабатывает console.log)
// store.dispatch({ type: 'INCREMENT' }); 
// store.dispatch({ type: 'INCREMENT' });
// store.dispatch({ type: 'DECREMENT' });