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

// toggleTodo(id) TOGGLE_TODO
export var toggleTodo = (id) => {
	return {
		type: 'TOGGLE_TODO',
		id
	};
};

export var addTodo = (text) => {
	return {
		type: 'ADD_TODO',
		text
	};
};