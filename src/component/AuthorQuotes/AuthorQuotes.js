import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styles from "./AuthorQuotes.module.css";
import axios from "axios";
import Spinner from "../../img/LoadingSpinner.gif";
import ErrorIcon from "../../img/ErrorIcon.svg";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";

const AuthorQuotes = () => {
	const { author } = useParams();

	const [quotes, setQuotes] = useState([]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");

	useEffect(() => {
		const getAuthorQuotes = () => {
			setLoading(true);
			setError("");
			axios
				.get(
					`https://quote-garden.herokuapp.com/api/v3/quotes?author=${author}`
				)
				.then((res) => {
					setQuotes(res.data.data);
					console.log(res.data.data);
					setLoading(false);
				})
				.catch((err) => {
					setLoading(false);
					setError("Quote could not be fetched!!");
				});
		};
		getAuthorQuotes();
	}, [author]);

	return (
		<>
			<div className={`container ${styles.mycontainer}`}>
				<header className={`row p-3 ${styles.myheader}`}>
					<div className="col-12 text-right">
						<div className={`${styles.myheader_random}`}>
							<Link to="/">
								<p className="p-2">
									<span>random </span>{" "}
									<i className="fas fa-sync-alt"></i>
								</p>
							</Link>
						</div>
					</div>
				</header>
				<div className={`row p-3 mt-4 ${styles.myheader_authorname}`}>
					<div className="col-9 text-left mx-auto">
						<div className="pl-4 pt-4">
							<p>{author}</p>
						</div>
					</div>
				</div>

				{loading ? (
					<div className="text-center" style={{}}>
						<img src={Spinner} alt="Loading Spinner"></img>
					</div>
				) : error && quotes.length === 0 ? (
					<div className="text-center" style={{}}>
						<img src={ErrorIcon} alt="Loading Spinner"></img>
						<p>{error}</p>
					</div>
				) : (
					quotes.map((quote) => (
						<section
							className={`row ${styles.myquote_container}`}
							key={quote._id}
						>
							<div className="col-9 text-left mx-auto">
								<div className={`pl-4 pt-4 ${styles.myquote}`}>
									<span>“{quote.quoteText}”</span>
								</div>
							</div>
						</section>
					))
				)}
			</div>
			<Footer />
		</>
	);
};

export default AuthorQuotes;
