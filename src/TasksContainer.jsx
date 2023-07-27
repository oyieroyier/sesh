
const TasksContainer = ({ tasks }) => {
	function deleteTask(id) {
		fetch(`https://seshbackend.vercel.app/todos/${id}`, {
			method: 'DELETE',
		});
	}

	return (
		<ol>
			{tasks.map((task) => (
				<li className="list" key={task.id}>
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
