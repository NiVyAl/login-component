import { createStore } from 'redux';
import axios from 'axios';

function loginToggle(state= "close", action) {
	state = action.type;
	return state
}

export let store = createStore(loginToggle);

if (localStorage.getItem("token")) {  //проверка на авторизованность
	axios.defaults.headers.common.Authorization = localStorage.getItem("token");
	
	if (localStorage.getItem("log")) {
		store.dispatch({ type: "log" });
	}
}

// store.subscribe(() => console.log(store.getState())); // подписались на событие (при изменении срабатывает console.log)