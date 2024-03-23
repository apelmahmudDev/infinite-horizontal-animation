import { useContext, useEffect, useState } from "react";
import TableActions from "./TableActions";
import TableHeader from "./TableHeader";
import { TasksContext } from "../context/TasksContext";
import TableRow from "./TableRow";
import TaskImg from "../assets/no-task.png";

const Table = () => {
	const tasks = useContext(TasksContext);
	const [allTasks, setAllTasks] = useState(tasks);
	const [searchKeyword, setSearchKeyword] = useState("");

	// get search keyword & control preserving tasks
	const handleOnChange = (e) => {
		setSearchKeyword(e.target.value);
		if (e.target.value === "") setAllTasks(tasks);
	};

	// search tasks by submit form value
	const handleSubmit = (e) => {
		e.preventDefault();
		setAllTasks(
			tasks.filter((task) =>
				task.title.toLowerCase().includes(searchKeyword.toLowerCase())
			)
		);
	};

	useEffect(() => {
		setAllTasks(tasks);
	}, [tasks]);

	return (
		<section className="mb-20" id="tasks">
			<div className="container">
				<div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
					<TableActions
						handleOnChange={handleOnChange}
						handleSubmit={handleSubmit}
					/>
					<div className="overflow-auto">
						{allTasks?.length > 0 ? (
							<table className="table-fixed overflow-auto xl:w-full">
								<TableHeader />
								<tbody>
									{allTasks.map((task) => (
										<TableRow key={task.id} task={task} />
									))}
								</tbody>
							</table>
						) : (
							<div className="flex items-center justify-center">
								<img height="40" width="40" src={TaskImg} alt="task" />
								Task List is empty!
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Table;
