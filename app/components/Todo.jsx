var React = require('react');

var Todo = React.createClass({
	render: function() {
		// ES6 destructuring to store Todo members in individual variables
		var {id, text} = this.props;
		
		return (
			<div>
				{id}. {text}
			</div>
		);
	}
});

module.exports = Todo;