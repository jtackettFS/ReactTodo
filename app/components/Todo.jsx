var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');

var actions = require('actions');

// Make this available as a property of the entire component
export var Todo = React.createClass({
	render: function() {
		// ES6 destructuring to store Todo members in individual variables
		var {id, text, completed, createdAt, completedAt, dispatch} = this.props;
		var todoClassName = completed ? 'todo todo-completed' : 'todo';
		var renderDate = () => {
			var message = 'Created ';
			var timeStamp = createdAt;
			
			if(completed) {
				message = 'Completed ';
				timeStamp = completedAt;
			}
			
			return message + moment.unix(timeStamp).format('MMM Do YYYY @ h:mm a');
		};
		
		return (
			// Creating a local function for a click handler
			<div className={todoClassName} onClick={() => {
				dispatch(actions.toggleTodo(id));
			}}>
				<div>
					<input type="checkbox" checked={completed}/>
				</div>
				<div>
					<p>{text}</p>
					<p className={'todo__subtext'}>{renderDate()}</p>
				</div>
			</div>
		);
	}
});

// Works as normal when doing a require
export default connect()(Todo);
