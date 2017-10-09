var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ =require('jQuery');

var TodoListForm = require('TodoListForm');

describe('TodoListForm', () => {
	it('Should exist', () => {
		expect(TodoListForm).toExist();
	});

	it('should call handleAddTodo if valid todo entered', () => {
		var todoText = 'Test';
		var spy = expect.createSpy();
		var addTodos = TestUtils.renderIntoDocument(<TodoListForm handleAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodos));

		addTodos.refs.todo.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toHaveBeenCalledWith(todoText);
	});

	it('should not call handleAddTodo if invalid todo entered', () => {
		var todoText = '';
		var spy = expect.createSpy();
		var addTodos = TestUtils.renderIntoDocument(<TodoListForm handleAddTodo={spy}/>);
		var $el = $(ReactDOM.findDOMNode(addTodos));

		addTodos.refs.todo.value = todoText;
		TestUtils.Simulate.submit($el.find('form')[0]);
		expect(spy).toNotHaveBeenCalled();
	});
});