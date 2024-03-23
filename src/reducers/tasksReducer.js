let nextId = 4;

export const initialTasks = [
	{
		id: 1,
		title: "Integration API",
		description:
			"Connect an existing API to a third-party database using secure methods and handle data exchange efficiently.",
		tags: ["Web", "Python", "API"],
		priority: "High",
		isFavorite: true,
	},
	{
		id: 2,
		title: "API Data Synchronization with Python",
		description:
			"Implement a Python solution to synchronize data between an API and a third-party database securely, optimizing data exchange.",
		tags: ["Python", "API", "Data Synchronization"],
		priority: "Low",
		isFavorite: false,
	},
	{
		id: 3,
		title: "Web Scraping",
		description:
			"Scrape data from a website using Python and store it in a database for further analysis.",
		tags: ["Web", "Python", "Data Scraping"],
		priority: "Medium",
		isFavorite: false,
	},
];

export function tasksReducer(tasks, action) {
	switch (action.type) {
		case "add": {
			return [
				...tasks,
				{
					id: nextId++,
					title: action.title,
					description: action.description,
					tags: action.tags,
					priority: action.priority,
				},
			];
		}
		case "edit": {
			return tasks.map((task) => {
				if (task.id === action.id) {
					return {
						...task,
						title: action.title,
						description: action.description,
						tags: action.tags,
						priority: action.priority,
					};
				}
				return task;
			});
		}
		case "toggle": {
			return tasks.map((task) => {
				if (task.id === action.id) {
					return {
						...task,
						isFavorite: !task.isFavorite,
					};
				}
				return task;
			});
		}
		case "delete": {
			return tasks.filter((task) => task.id !== action.id);
		}
		case "allDelete": {
			return (tasks = []);
		}
		default:
			return tasks;
	}
}
