var React = require('react');

var Todo = React.createClass({
	render: function() {
		// ES6 destructuring to store Todo members in individual variables
		var {id, text, completed} = this.props;
		
		return (
			// Creating a local function for a click handler
			<div onClick={() => {
				this.props.onToggle(id);
			}}>
				<input type="checkbox" checked={completed}/>
				{text}
			</div>
		);
	}
});

module.exports = Todo;