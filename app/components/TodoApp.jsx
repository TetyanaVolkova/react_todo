var React = require('react');
var TodoList = require('TodoList');
var TodoListForm = require('TodoListForm');
var TodoSearch = require('TodoSearch');
var uuid = require('uuid');


var TodoApp = React.createClass({
	getInitialState: function(){
		return {
			showComplited: false,
			searchText: '',
			todos: [
				{
					id: uuid(),
					text: 'Walk the dog'
				},
				{
					id: uuid(),
					text: 'Clean the yard'
				},
				{
					id: uuid(),
					text: 'Finish the article'
				},
				{
					id: uuid(),
					text: 'Find job'
				}
			]
		};
	},
	handleAddTodo: function(text) {
		this.setState({
			todos: [
				...this.state.todos,
				{
					id: uuid(),
					text: text
				}
			]
		});
	},
	handleSearch: function(showComplited, searchText) {
		this.setState({
			showComplited: showComplited,
			searchText: searchText.toLowerCase()
		});
		console.log(this.state.searchText);
		console.log(this.state.showComplited);
	},
	render: function() {
		var {todos} = this.state;

		return(
			<div>
				<TodoSearch onSearch = {this.handleSearch} />
				<TodoList todos={todos} />
				<TodoListForm handleAddTodo={this.handleAddTodo} />
			</div>
		)
	}
});

module.exports = TodoApp;