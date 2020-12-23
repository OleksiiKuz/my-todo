import React from 'react'
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const TodoList = ({ todos, onToggle }) => {
	return (
		< >
			{todos.map((todo, index) => {
				return <TodoItem todo={todo} key={todo.id} index={index} onToggle={onToggle} />
			})}
		</>
	)
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList;
