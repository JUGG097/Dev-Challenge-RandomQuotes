import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import AuthorQuotes from "./component/AuthorQuotes/AuthorQuotes";

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/:author" exact component={AuthorQuotes} />
			</Switch>
		</div>
	);
}

export default App;
