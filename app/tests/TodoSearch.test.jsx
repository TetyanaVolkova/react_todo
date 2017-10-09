var expect = require('expect');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var $ =require('jQuery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', () => {
	it('Should exist', () => {
		expect(TodoSearch).toExist();
	});

	it('should call onSearch with entered input text', () => {
		var searchText = 'Test';
		var spy = expect.createSpy();
		var addSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

		addSearch.refs.searchText.value = searchText;
		TestUtils.Simulate.change(addSearch.refs.searchText);
		expect(spy).toHaveBeenCalledWith(false, 'Test');
	});

	it('should call onSearch with proper checked value', () => {
		var spy = expect.createSpy();
		var addSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);

		addSearch.refs.showCompleted.checked = true;
		TestUtils.Simulate.change(addSearch.refs.showCompleted);
		expect(spy).toHaveBeenCalledWith(true, '');
	});
});