var React = require('react');
var uuid = require('node-uuid');

var AddTodo = require('AddTodo');
var TodoList = require('TodoList');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			showCompleted: false,
			searchText: '',
			// Creating an array of objects
			todos: [
				{
					id: uuid(),
					text: 'Pet the Clank'
				}, {
					id: uuid(),
					text: 'Pet the Loom'
				}
			]
		};
	},
	
	// Handler
	handleAddTodo: function(text) {
		this.setState({
			todos: [
				...this.state.todos, // Gives all elements of an array
				{
					id: uuid(),
					text: text
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
	
	render: function() {
		// Storing the variable from the state using ES6 destructuring
		var {todos} = this.state;
		
		return(
			<div>
				{/* Passing a function to another component */}
				<TodoSearch onSearch={this.handleSearch}/>
				{/* Passing a variable to another component */}
				<TodoList todos={todos}/>
				<AddTodo onAddTodo={this.handleAddTodo}/>
			</div>
		);
	}
});

module.exports = TodoApp;