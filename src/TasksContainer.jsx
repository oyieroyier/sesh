import { useState } from "react";

const TasksContainer = ({ tasks }) => {
	

	const [crossed, setCrossed] = useState(false);
	function deleteTask(id) {
		fetch(`http://localhost:3000/todos/${id}`, {
			method: 'DELETE',
		});
	}

	function crossOut(id) {
		console.log(id);
	}

	return (
		<ol>
			{tasks.map((task) => (
				<li
					className="list"
					key={task.id}
					onDoubleClick={() => crossOut(task.id)}
				>
					<h1>{task.title}</h1>
					<p
						className={
							task.status === 'canceled'
								? 'high'
								: task.status === 'pending'
								? 'medium'
								: 'low'
						}
					>
						{task.status}
					</p>
					<p>{task.priority}</p>
					<button className="bg-red-500" onClick={() => deleteTask(task.id)}>
						DELETE TASK
					</button>
				</li>
			))}
		</ol>
	);
};

export default TasksContainer;
