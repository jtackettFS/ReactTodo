var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import {configure} from 'configureStore';
import ConnectedTodoList, {TodoList} from 'TodoList';
import ConnectedTodo, {Todo} from 'Todo';

describe('TodoList', () => {
	
	it('should exist', () => {
		expect(TodoList).toExist();
	});
	
	// Test passes a string stating what is being tested, and then a function to do the test
	it('should render one Todo component for each Todo item', () => {
		var todos = [
			{
				id: 1,
				text: 'Do something',
				completed: false,
				completedAt: undefined,
				createdAt: 500
			}, {
				id: 2,
				text: 'Do something else',
				completed: false,
				completedAt: undefined,
				createdAt: 500
			}];
		// create local store
		var store = configure({
			todos
		});
		var provider = TestUtils.renderIntoDocument(
			<Provider store={store}>
				<ConnectedTodoList/>
			</Provider>
		);
		
		var todoList = TestUtils.scryRenderedComponentsWithType(provider, ConnectedTodoList)[0];
		// 1st param is the object, 2nd param is what we're looking for
		var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, ConnectedTodo);
		
		expect(todosComponents.length).toBe(todos.length);
	});
	
	it('should render empty message if no todos', () => {
		var todos = [];
		
		// Passing todos array as prop
		var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
		var $el = $(ReactDOM.findDOMNode(todoList));
		
		expect($el.find('.container__message').length).toBe(1);
	});
});