import axios from 'axios';
import { useState } from 'react';

const AddTasks = ({ setTasks }) => {
	const [title, setTaskName] = useState('');
	const [status, setTaskStatus] = useState('');
	const [priority, setTaskPriority] = useState('');

	function addANewTask(e) {
		e.preventDefault();

		const newTask = { title, priority, status };

		fetch('http://localhost:3000/todos', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(newTask),
		}).then(() => {
			setTaskName('');
			setTaskPriority('');
			setTaskStatus('');
		});
	}

	return (
		<form onSubmit={addANewTask}>
			<input
				type="text"
				value={title}
				placeholder="task name"
				onChange={(e) => setTaskName(e.target.value)}
			/>
			<input
				type="text"
				value={status}
				placeholder="status"
				onChange={(e) => setTaskStatus(e.target.value)}
			/>
			<input
				type="text"
				value={priority}
				placeholder="priority"
				onChange={(e) => setTaskPriority(e.target.value)}
			/>

			<button className="bg-blue-400 rounded-lg">Add Task</button>
		</form>
	);
};

export default AddTasks;
