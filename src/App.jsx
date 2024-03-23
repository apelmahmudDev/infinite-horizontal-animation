import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import TasksProvider from "./components/TasksProvider";

function App() {
	return (
		<TasksProvider>
			<div className="bg-[#191D26] font-[Inter] text-white">
				<Navbar />
				<Hero />
				<Table />
				<Footer />
			</div>
		</TasksProvider>
	);
}

export default App;
