import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
	return (
		<footer className={`mt-4 p-4 ${styles.my_footer}`} style={{}}>
			<div className="container">
				<div className="row">
					<div className="col-12 text-center">
						<p>Created By Adeoluwa Adeboye - devChallenge.io</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
