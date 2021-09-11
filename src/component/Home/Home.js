import React, { useEffect, useState } from "react";
import styles from "./Home.module.css";

const Home = () => {
	useEffect(() => {}, []);
	return (
		<>
			<div className="container">
				<header className={`row p-3 ${styles.myheader}`}>
					<div className="col-12 text-right">
						<div onClick>
							<span>random </span> <i class="fas fa-sync-alt"></i>
						</div>
					</div>
				</header>

				<section className={`row mt-4`}>
					<div className="col-10 text-left mx-auto">
						<div className={`pl-4 ${styles.myquote}`}>
							<span>
								“The first rule of any technology used in a
								business is that automation applied to an
								efficient operation will magnify the efficiency.
								The second is that automation applied to an
								inefficient operation will magnify the
								inefficiency.”
							</span>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default Home;
