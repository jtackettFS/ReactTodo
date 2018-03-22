var React = require('react');
// connect is a way to connect to the provider
var {connect} = require('react-redux');

// Local requires
import Todo from 'Todo';
var TodoAPI = require('TodoAPI');

export var TodoList = React.createClass({
	render: function() {
		
		// Props is a variable or value that was passed when rendering/using this component
		var {todos, showCompleted, searchText} = this.props;
		
		// A local function
		var renderTodos = () => {
			if(todos.length === 0) {
				return (
					<p className={'container__message'}>Nothing to Do</p>
				);
			};
			
			// map is a way to do a foreach.
			// This particular one will return some html for each Todo in the array
			return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo) => {
				return (
					// The ... (spread operator) takes every part of the Todo and passes it down as a prop
					<Todo key={todo.id} {...todo}/>
				);
			});
		};
		
		return (
			<div>
				{/* Calling a function within a render function */}
				{renderTodos()}
			</div>
		);
	}
});

// Connect TodoList to the provider
export default connect(
	(state) => {
		return state;
	}
)(TodoList);