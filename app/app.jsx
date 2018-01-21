var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// Local requires
var TodoApp = require('TodoApp');

// Load foundation
$(document).foundation();

// Load app.scss
require('style!css!sass!applicationStyles')

$(document).foundation();

ReactDOM.render(
    <TodoApp/>,
    document.getElementById('app')
);
