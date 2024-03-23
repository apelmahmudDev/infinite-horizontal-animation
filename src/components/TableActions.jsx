import { useContext, useState } from "react";
import SearchIcon from "./icon/SearchIcon";
import TaskAddNEditPopup from "./TaskAddNEditPopup";
import { TasksDispatchContext } from "../context/TasksContext";

const TableActions = ({ handleOnChange, handleSubmit }) => {
	const dispatch = useContext(TasksDispatchContext);
	const [open, setOpen] = useState(false);

	return (
		<div className="mb-14 items-center justify-between sm:flex">
			<h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
			<div className="flex items-center space-x-5">
				<form onSubmit={handleSubmit}>
					<div className="flex">
						<div className="relative overflow-hidden rounded-lg text-gray-50 md:min-w-[380px] lg:min-w-[440px]">
							<input
								type="search"
								id="search-dropdown"
								className="z-20 block w-full bg-gray-800 px-4 py-2 pr-10 focus:outline-none"
								placeholder="Search Task"
								required
								onChange={(e) => handleOnChange(e)}
							/>
							<button
								type="submit"
								className="absolute right-2 top-0 h-full rounded-e-lg text-white md:right-4"
							>
								<SearchIcon />
								<span className="sr-only">Search</span>
							</button>
						</div>
					</div>
				</form>
				<button
					onClick={() => setOpen(true)}
					className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
				>
					Add Task
				</button>
				<button
					onClick={() =>
						dispatch({
							type: "allDelete",
						})
					}
					className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
				>
					Delete All
				</button>
			</div>

			{/* New Task Add Popup */}
			{open && <TaskAddNEditPopup onCloseTaskAddNEditPopup={setOpen} />}
		</div>
	);
};

export default TableActions;
