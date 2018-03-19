var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

var AddTodo = require('AddTodo');
var TodoAPI = require('TodoAPI');
var TodoList = require('TodoList');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			// The array of todos
			todos: TodoAPI.getTodos()
		};
	},
	
	// Gets called whenever props or state for component is changed
	componentDidUpdate: function() {
		TodoAPI.setTodos(this.state.todos);
	},
	
	// Handler
	handleAddTodo: function(text) {
		this.setState({
			todos: [
				...this.state.todos, // Gives all elements of an array
				{
					id: uuid(),
					text: text,
					completed: false,
					createdAt: moment().unix(),
					completedAt: undefined
				}
			]
		});
	},
	
	handleSearch: function(showCompleted, searchText) {
		this.setState({
			showCompleted: showCompleted,
			searchText: searchText.toLowerCase()
		});
	},
	
	handleToggle: function(id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id) {
				todo.completed = !todo.completed;
				todo.completedAt = todo.completed ? moment().unix() : undefined;
			}
			
			return todo;
		});
		
		this.setState(updatedTodos);
	},
	
	render: function() {
		// Storing the variable from the state using ES6 destructuring
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
		
		return(
			<div>
				{/* Passing a function to another component */}
				<TodoSearch onSearch={this.handleSearch}/>
				{/* Passing a variable to another component */}
				<TodoList todos={filteredTodos} onToggle={this.handleToggle}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;