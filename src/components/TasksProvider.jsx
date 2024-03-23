import { useReducer } from "react";
import { initialTasks, tasksReducer } from "../reducers/tasksReducer";
import { TasksContext, TasksDispatchContext } from "../context/TasksContext";

const TasksProvider = ({ children }) => {
	const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
	return (
		<TasksContext.Provider value={tasks}>
			<TasksDispatchContext.Provider value={dispatch}>
				{children}
			</TasksDispatchContext.Provider>
		</TasksContext.Provider>
	);
};

export default TasksProvider;
