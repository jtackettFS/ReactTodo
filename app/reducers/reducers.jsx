var uuid = require('node-uuid');
var moment = require('moment');

// Reducers are used to call actions.   The item to change is the state,
// and the thing to change it to is stored in the action object
export var searchTextReducer = (state = '', action) => {
	switch(action.type) {
		case 'SET_SEARCH_TEXT':
			return action.searchText;
			
		default:
			return state;
	};
};

export var showCompletedReducer = (state = false, action) => {
	switch(action.type) {
		case 'TOGGLE_SHOW_COMPLETED':
			return !state;
			
		default:
			return state;
	};
};

export var todosReducer = (state = [], action) => {
	switch(action.type) {
		case 'ADD_TODO':
			// Return the entire array (with ...), and add a new one
			return [
				...state,
				action.todo
			];
			
		case 'ADD_TODOS':
			return [
				...state,
				...action.todos
			];
			
		case 'TOGGLE_TODO':
			// Use map to iterate through the array and find the object to be updated
			return state.map((todo) => {
				if(todo.id == action.id) {
					var nextCompleted = !todo.completed;
					
					// Return the object, with the two properties updated
					return {
						...todo,
						completed: nextCompleted,
						completedAt: nextCompleted ? moment().unix() : undefined
					};
				} else {
					return todo;
				}
			});
		default:
			return state;
	};
};