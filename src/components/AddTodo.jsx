import React from 'react'

const AddTodo = ({ onCreate }) => {

	const [value, setValue] = React.useState('');

	const submitHendler = (event) => {
		event.preventDefault();

		if (value.trim()) {
			onCreate(value);
			setValue('');
		}
	}
	return (
		<div>
			<form onSubmit={submitHendler} className="form-group">
				<input className="form-control" placeholder='Write something...' value={value} onChange={(event) => setValue(event.target.value)} />
				<button className="btn btn-primary add-btn">Add new task</button>
			</form>
		</div>
	)
}

export default AddTodo;