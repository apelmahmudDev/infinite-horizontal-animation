import { useContext, useState } from "react";
import TaskAddNEditPopup from "./TaskAddNEditPopup";
import StarFilledIcon from "./icon/StarFilledIcon";
import { getRandomColor } from "../utils/randomColor";
import StarUnfilledIcon from "./icon/StarUnfilledIcon";
import { TasksDispatchContext } from "../context/TasksContext";

const TableRow = ({ task }) => {
	const dispatch = useContext(TasksDispatchContext);
	const [open, setOpen] = useState(false);

	const handleDeleteTask = (id) => {
		dispatch({ type: "delete", id });
	};

	const handleToggleFavorite = (id) => {
		dispatch({
			type: "toggle",
			id,
		});
	};

	return (
		<tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
			<td>
				<button onClick={() => handleToggleFavorite(task?.id)}>
					{task?.isFavorite ? <StarFilledIcon /> : <StarUnfilledIcon />}
				</button>
			</td>
			<td>{task?.title}</td>
			<td>
				<div>{task?.description}</div>
			</td>
			<td>
				<ul className="flex justify-center gap-1.5 flex-wrap">
					{task?.tags?.map((tag) => (
						<li key={tag}>
							<span
								className={`inline-block h-5 whitespace-nowrap rounded-[45px] px-2.5 text-sm capitalize text-[#F4F5F6]`}
								style={{ backgroundColor: getRandomColor() }}
							>
								{tag}
							</span>
						</li>
					))}
				</ul>
			</td>
			<td className="text-center capitalize">{task?.priority}</td>
			<td>
				<div className="flex items-center justify-center space-x-3">
					<button
						className="text-red-500"
						onClick={() => handleDeleteTask(task?.id)}
					>
						Delete
					</button>
					<button onClick={() => setOpen(true)} className="text-blue-500">
						Edit
					</button>
					{open && (
						<TaskAddNEditPopup onCloseTaskAddNEditPopup={setOpen} task={task} />
					)}
				</div>
			</td>
		</tr>
	);
};

export default TableRow;
