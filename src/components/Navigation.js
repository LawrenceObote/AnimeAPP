import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Anime from './Anime';
import Manga from './Manga';
import '../App.css';

function Navigation() {
	return (
		<Router>
			<nav className="wrapper">
				<ul className="mota-nav">
					<li>
						<Link className="text-white" to="/">
							Home Page
						</Link>
					</li>
					<li>
						<Link className="text-white" to="/anime">
							Anime
						</Link>
					</li>
					<li>
						<Link className="text-white" to="/manga">
							Manga
						</Link>
					</li>
				</ul>
			</nav>
			<Switch>
				<Route exact path="/" component={Home}></Route>
				<Route exact path="/anime" component={Anime}></Route>
				<Route exact path="/manga" component={Manga}></Route>
			</Switch>
		</Router>
	);
}
export default Navigation;
