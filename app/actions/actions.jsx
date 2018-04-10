import firebase, {firebaseRef} from "app/firebase/";
import moment from 'moment';

// export makes this function available outside this file
export var setSearchText = (searchText) => {
	return {
		type: 'SET_SEARCH_TEXT',
		searchText  // If data member and argument are the same name, you don't need to use the :
	};
};

// toggleShowCompleted TOGGLE_SHOW_COMPLETED (no params)
export var toggleShowCompleted  = () => {
	return {
		type: 'TOGGLE_SHOW_COMPLETED'
	};
};

export var addTodo = (todo) => {
	return {
		type: 'ADD_TODO',
		todo
	};
};

export var startAddTodo = (text) => {
	return(dispatch, getState) => {
		var todo = {
			text,
			completed: false,
			createdAt: moment().unix(),
			completedAt: null
		};
		// Save to firebase
		var todoRef = firebaseRef.child('todos').push(todo);
		
		// Use a promise
		return todoRef.then(() => {
			dispatch(addTodo({
				...todo,
				id: todoRef.key
			}));
		});
	};
};

export var addTodos = (todos) => {
	return {
		type: 'ADD_TODOS',
		todos
	}
};

export var toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};

