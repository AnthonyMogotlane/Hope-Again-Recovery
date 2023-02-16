import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import { PicCarousel } from "../components/PicCarousel";
export function Home() {
	const [message, setMessage] = useState("Loading...");
	useEffect(() => {
		fetch("/api")
			.then((res) => {
				if (!res.ok) {
					throw new Error(res.statusText);
				}
				return res.json();
			})
			.then((body) => {
				setMessage(body.message);
			})
			.catch((err) => {
				console.error(err);
			});
	}, []);

	return (
		<main role="main">
			<div>
				<h1 className="message" data-qa="message">
					{message}
				</h1>
				<Link to="/about/this/site">About</Link>
				<PicCarousel />
			</div>
		</main>
	);
}

export default Home;
