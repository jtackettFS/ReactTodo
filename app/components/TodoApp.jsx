var React = require('react');

var TodoList = require('TodoList');

var TodoApp = React.createClass({
	getInitialState: function() {
		return {
			todos: [
				{
					id: 1,
					text: 'Pet the Clank'
				}, {
					id: 2,
					text: 'Pet the Loom'
				}
			]
		};
	},
	
	render: function() {
		var {todos} = this.state;
		
		return(
			<div>
				<TodoList todos={todos}/>
			</div>
		);
	}
});

module.exports = TodoApp;