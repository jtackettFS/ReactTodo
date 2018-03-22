var React = require('react');
var uuid = require('node-uuid');
var moment = require('moment');

import AddTodo from 'AddTodo';
var TodoAPI = require('TodoAPI');
import TodoList from 'TodoList';
import TodoSearch from 'TodoSearch';

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
	
	render: function() {
		// Storing the variable from the state using ES6 destructuring
		var {todos, showCompleted, searchText} = this.state;
		var filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);
		
		return(
			<div>
				<h1 className={'page-title'}>Todo App</h1>
				
				<div className={'row'}>
					<div className={'column small-centered small-11 medium-6 large-5'}>
						<div className={'container'}>
							{/* Passing a function to another component */}
							<TodoSearch onSearch={this.handleSearch}/>
							{/* Passing a variable to another component */}
							<TodoList/>
							<AddTodo onAddTodo={this.handleAddTodo}/>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

module.exports = TodoApp;