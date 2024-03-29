import { Fragment, useEffect } from "react";
import "./animation.css";

function App() {
	useEffect(() => {
		const scrollers = document.querySelectorAll(".scroller");

		// If a user hasn't opted in for recuded motion, then we add the animation
		if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
			addAnimation();
		}

		function addAnimation() {
			scrollers.forEach((scroller) => {
				// add data-animated="true" to every `.scroller` on the page
				scroller.setAttribute("data-animated", true);

				// Make an array from the elements within `.scroller-inner`
				const scrollerInner = scroller.querySelector(".scroller__inner");
				const scrollerContent = Array.from(scrollerInner.children);

				// For each item in the array, clone it
				// add aria-hidden to it
				// add it into the `.scroller-inner`
				scrollerContent.forEach((item) => {
					const duplicatedItem = item.cloneNode(true);
					duplicatedItem.setAttribute("aria-hidden", true);
					scrollerInner.appendChild(duplicatedItem);
				});
			});
		}
	}, []);

	return (
		<Fragment>
			{/* start animation horizontally */}
			<h1 style={{ textAlign: "center" }}>Infinite Scroll Animation</h1>

			<div className="scroller" data-speed="fast">
				<ul className="tag-list scroller__inner">
					<li>HTML</li>
					<li>CSS</li>
					<li>JS</li>
					<li>SSG</li>
					<li>webdev</li>
					<li>animation</li>
					<li>UI/UX</li>
					<li>React</li>
					<li>Node</li>
					<li>Express</li>
					<li>Python</li>
					<li>Java</li>
				</ul>
			</div>

			<div className="scroller" data-direction="right" data-speed="slow">
				<div className="scroller__inner">
					<img src="https://i.pravatar.cc/150?img=1" alt="" />
					<img src="https://i.pravatar.cc/150?img=2" alt="" />
					<img src="https://i.pravatar.cc/150?img=3" alt="" />
					<img src="https://i.pravatar.cc/150?img=4" alt="" />
					<img src="https://i.pravatar.cc/150?img=5" alt="" />
					<img src="https://i.pravatar.cc/150?img=6" alt="" />
				</div>
			</div>
			{/* end animation horizontally */}
		</Fragment>
	);
}

export default App;
