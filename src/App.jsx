import { useEffect, useState } from 'react';
import axios from 'axios';

import AddTasks from './AddTasks';
import TasksContainer from './TasksContainer';

export default function App() {
	const [tasks, setTasks] = useState([]);

	useEffect(() => {
		axios.get('https://seshbackend.vercel.app/todos').then((res) => {
			setTasks(res.data);
		});
	}, [tasks]);

	return (
		<>
			<AddTasks setTasks={setTasks} />
			<TasksContainer tasks={tasks} />
		</>
	);
}
