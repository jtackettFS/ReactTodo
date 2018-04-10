var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jquery');

import * as actions from 'actions';
var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
	
	it('should exist', () => {
		expect(AddTodo).toExist();
	});
	
	it('should dispatch ADD_TODO when valid todo text', () => {
		var todoText = 'Change todo';
		var action = actions.startAddTodo(todoText);
		
		// Spies can track calls made to other functions
		var spy = expect.createSpy();
		// Create an instance of this component and attach the spy
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		// jquery so that we can look at individual parts of the component
		var $el = $(ReactDOM.findDOMNode(addTodo));
		
		// Fill in the form's value
		addTodo.refs.todoText.value = todoText;
		// Simulate a submit of the form's search field (which is the first sub-html in the form)
		TestUtils.Simulate.submit($el.find('form')[0]);
		
		// Test to make sure that the correct function was called with the correct data
		expect(spy).toHaveBeenCalledWith(action);
	});
	
	it('should not dispatch ADD_TODO when invalid todo text', () => {
		var todoText = '';
		var spy = expect.createSpy();
		var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodo));
		
		addTodo.refs.todoText.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);
		
		// Test to see that the function was not called
		expect(spy).toNotHaveBeenCalled();
	});
});