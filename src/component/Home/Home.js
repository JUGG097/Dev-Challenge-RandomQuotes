import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";
import Footer from "../Footer/Footer";
import axios from "axios";
import Spinner from "../../img/LoadingSpinner.gif";
import ErrorIcon from "../../img/ErrorIcon.svg";
import { Link } from "react-router-dom";

const Home = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [quote, setQuote] = useState({});

	const getRandomQuote = () => {
		setLoading(true);
		setError("");
		axios
			.get("https://quote-garden.herokuapp.com/api/v3/quotes/random")
			.then((res) => {
				setQuote(res.data.data[0]);
				// console.log(res.data.data[0]);
				setLoading(false);
			})
			.catch((err) => {
				setLoading(false);
				setError("Quote could not be fetched!!");
			});
	};
	useEffect(() => {
		getRandomQuote();
	}, []);
	return (
		<>
			<div className={`container ${styles.mycontainer}`}>
				<header className={`row p-3 ${styles.myheader}`}>
					<div className="col-12 text-right">
						<div className={`${styles.myheader_random}`}>
							<p className="p-2" onClick={getRandomQuote}>
								<span>random </span>{" "}
								<i className="fas fa-sync-alt"></i>
							</p>
						</div>
					</div>
				</header>

				{loading ? (
					<div className="text-center" style={{}}>
						<img src={Spinner} alt="Loading Spinner"></img>
					</div>
				) : error ? (
					<div className="text-center" style={{}}>
						<img src={ErrorIcon} alt="Loading Spinner"></img>
						<p>{error}</p>
					</div>
				) : (
					<>
						<section className={`row mt-4`}>
							<div className="col-9 text-left mx-auto">
								<div className={`pl-4 pt-4 ${styles.myquote}`}>
									<span>“{quote.quoteText}”</span>
								</div>
							</div>
						</section>
						<section className={`row mt-4`}>
							<div className={`col-9 text-left mx-auto `}>
								<div className={`${styles.authordetails}`}>
									<div className="">
										<Link
											to={`/${quote.quoteAuthor}`}
											className="row p-4"
										>
											<div className="col-10">
												<div className={``}>
													<p>{quote.quoteAuthor}</p>
													<span>
														{quote.quoteGenre}
													</span>
												</div>
											</div>
											<div className="col-2 text-right my-auto">
												<div>
													<i
														className="fas fa-arrow-right"
														style={{
															color: "white",
														}}
													></i>
												</div>
											</div>
										</Link>
									</div>
								</div>
							</div>
						</section>
					</>
				)}
			</div>
			<Footer />
		</>
	);
};

export default Home;
