var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

var Todo = require('Todo');
var TodoList = require('TodoList');

describe('TodoList', () => {
	
	it('should exist', () => {
		expect(TodoList).toExist();
	});
	
	// Test passes a string stating what is being tested, and then a function to do the test
	it('should render one Todo component for each Todo item', () => {
		var todos = [
			{
				id: 1,
				text: 'Do something'
			}, {
				id: 2,
				text: 'Do something else'
			}
		];
		
		// Passing todos array as prop
		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		// 1st param is the object, 2nd param is what we're looking for
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);
		
		expect(todosComponents.length).toBe(todos.length);
	});
});