var React = require('react');

var TodoListForm = React.createClass({

	onFormSubmit: function(e) {
		e.preventDefault();
			var todo = this.refs.todo.value;
			if(todo.length > 0) {
				this.refs.todo.value = '';
				this.props.handleAddTodo(todo);
			} else {
				this.refs.todo.focus();
			}

	},
	render: function() {
		var {text} = this.props;
		return (
			<div>
		        <form onSubmit={this.onFormSubmit}>
		          <input type="text" ref='todo' placeholder="What do you need to do?"/>
		          <button className="button expanded hollow">Add Todo</button>
		        </form>
		    </div>
		)
	}
});
module.exports = TodoListForm;