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
					text: 'Walk the dog',
					completed: false
				},
				{
					id: uuid(),
					text: 'Clean the yard',
					completed: true
				},
				{
					id: uuid(),
					text: 'Finish the article',
					completed: true
				},
				{
					id: uuid(),
					text: 'Find job',
					completed: false
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
					text: text,
					completed: false
				}
			]
		});
	},
	handleToggle: function(id) {
		var updatedTodos = this.state.todos.map((todo) => {
			if(todo.id === id) {
				todo.completed = !todo.completed;
			}

			return todo;
		});

		this.setState({todos: updatedTodos});
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
				<TodoList todos={todos} onToggle={this.handleToggle} />
				<TodoListForm handleAddTodo={this.handleAddTodo} />
			</div>
		)
	}
});

module.exports = TodoApp;