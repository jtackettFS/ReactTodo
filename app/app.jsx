var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Local requires
var TodoApp = require('TodoApp');

var actions = require('actions');
var store = require('configureStore').configure();

store.subscribe(() => {
	console.log('New state', store.getState());
});

store.dispatch(actions.addTodo('Go to Costco'));
store.dispatch(actions.setSearchText('Costco'));
store.dispatch(actions.toggleShowCompleted());

// Load foundation
$(document).foundation();

// Load app.scss
require('style!css!sass!applicationStyles');

$(document).foundation();

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);
