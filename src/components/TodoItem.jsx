import React from 'react';
import PropTypes from 'prop-types';
import Context from '../context';

const TodoItem = ({ todo, index, onToggle }) => {

	const { removeTodo } = React.useContext(Context)

	const classes = [];

	if (todo.completed) {
		classes.push('done');
	};

	return (
		<li className="list-group-item note item">
			<div className={classes.join(' ')}>
				<input type="checkbox"
					checked={todo.completed}
					onChange={() => { onToggle(todo.id) }} />
				<strong>{index + 1}</strong>
				<span>{todo.title}</span>
			</div>


			<button className="btn btn-outline-danger btn-sm" onClick={() => removeTodo(todo.id)}>&times;</button>
		</li >
	)
}

TodoItem.propTypes = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number.isRequired
}

export default TodoItem;
