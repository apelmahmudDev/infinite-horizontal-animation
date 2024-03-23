import { useContext, useState } from "react";
import XMarkIcon from "./icon/XMarkIcon";
import { TasksDispatchContext } from "../context/TasksContext";

const TaskAddNEditPopup = ({ onCloseTaskAddNEditPopup, task }) => {
	const dispatch = useContext(TasksDispatchContext);

	const [newTask, setNewTask] = useState({
		title: task ? task.title : "",
		description: task ? task?.description : "",
		tags: task ? task.tags : [],
		priority: task ? task.priority : "",
	});

	const handleChange = (e) => {
		if (e.target.name === "tags") {
			setNewTask({
				...newTask,
				[e.target.name]: e.target.value.split(","),
			});
		} else {
			setNewTask({
				...newTask,
				[e.target.name]: e.target.value,
			});
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (task) {
			dispatch({
				type: "edit",
				id: task.id,
				title: newTask.title,
				description: newTask.description,
				tags: newTask.tags,
				priority: newTask.priority,
				isFavorite: false,
			});
		} else {
			dispatch({
				type: "add",
				title: newTask.title,
				description: newTask.description,
				tags: newTask.tags,
				priority: newTask.priority,
				isFavorite: false,
			});
		}
		onCloseTaskAddNEditPopup(false);
	};
	return (
		<form
			onSubmit={handleSubmit}
			className="mx-auto my-10 w-full max-w-[740px] rounded-xl border border-[#FEFBFB]/[36%] bg-[#191D26] p-9 max-md:px-4 lg:my-20 lg:p-11"
			style={{
				position: "fixed",
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				margin: "auto",
				zIndex: 1000,
				width: "100%",
				height: "calc(100% - 3rem)",
				overflowY: "auto",
			}}
		>
			<button
				onClick={() => onCloseTaskAddNEditPopup(false)}
				type="button"
				style={{ position: "absolute", right: "16px" }}
			>
				<XMarkIcon />
			</button>
			<h2 className="mb-9 text-center text-2xl font-bold text-white lg:mb-11 lg:text-[28px]">
				{task ? "Edit Task" : "Add New Task"}
			</h2>
			{/* inputs  */}
			<div className="space-y-9 text-white lg:space-y-10">
				{/* title */}
				<div className="space-y-2 lg:space-y-3">
					<label htmlFor="title">Title</label>
					<input
						className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
						type="text"
						name="title"
						value={newTask.title}
						id="title"
						required
						onChange={(e) => handleChange(e)}
					/>
					{newTask.title.trim() === "" && (
						<span className="text-sm">Title is required</span>
					)}
				</div>
				{/* description */}
				<div className="space-y-2 lg:space-y-3">
					<label htmlFor="description">Description</label>
					<textarea
						className="block min-h-[120px] w-full rounded-md bg-[#2D323F] px-3 py-2.5 lg:min-h-[180px]"
						type="text"
						name="description"
						value={newTask.description}
						id="description"
						required
						onChange={(e) => handleChange(e)}
					></textarea>
					{newTask.description.trim() === "" && (
						<span className="text-sm">description is required</span>
					)}
				</div>
				{/* input group */}
				<div className="grid-cols-2 gap-x-4 max-md:space-y-9 md:grid lg:gap-x-10 xl:gap-x-20">
					{/* tags */}
					<div className="space-y-2 lg:space-y-3">
						<label htmlFor="tags">Tags</label>
						<input
							className="block w-full rounded-md bg-[#2D323F] px-3 py-2.5"
							type="text"
							name="tags"
							value={newTask.tags}
							id="tags"
							required
							onChange={(e) => handleChange(e)}
						/>
						{newTask.tags.length === 0 && (
							<span className="text-sm">Tags is required</span>
						)}
					</div>
					{/* priority  */}
					<div className="space-y-2 lg:space-y-3">
						<label htmlFor="priority">Priority</label>
						<select
							className="block w-full cursor-pointer rounded-md bg-[#2D323F] px-3 py-2.5"
							name="priority"
							id="priority"
							required
							onChange={(e) => handleChange(e)}
						>
							<option value="">Select Priority</option>
							<option
								selected={task ? task?.priority === "Low" : ""}
								value="low"
							>
								Low
							</option>
							<option
								selected={task ? task?.priority === "Medium" : ""}
								value="medium"
							>
								Medium
							</option>
							<option
								selected={task ? task?.priority === "High" : ""}
								value="high"
							>
								High
							</option>
						</select>
						{!newTask.priority && (
							<span className="text-sm">Priority is required</span>
						)}
					</div>
				</div>
			</div>
			{/* inputs ends */}
			<div className="mt-16 flex justify-center lg:mt-20">
				<button
					type="submit"
					className="rounded bg-blue-600 px-4 py-2 text-white transition-all hover:opacity-80"
				>
					{task ? "Edit Task" : "Create new Task"}
				</button>
			</div>
		</form>
	);
};

export default TaskAddNEditPopup;
