var React = require('react');

// Local requires
var Todo = require('Todo');

var TodoList = React.createClass({
	render: function() {
		
		// Props is a variable or value that was passed when rendering/using this component
		var {todos} = this.props;
		
		// A local function
		var renderTodos = () => {
			// map is a way to do a foreach.
			// This particular one will return some html for each Todo in the array
			return todos.map((todo) => {
				return (
					// The ... (spread operator) takes every part of the Todo and passes it down as a prop
					<Todo key={todo.id} {...todo} onToggle={this.props.onToggle}/>
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

module.exports = TodoList;