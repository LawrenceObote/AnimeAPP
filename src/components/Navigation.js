import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Anime from './Anime';
import Manga from './Manga';

function Navigation() {
	return (
		<Router>
			<nav className="wrapper">
				<ul className="navi">
					<li>
						<Link to="/"> Home </Link>
					</li>
					<li>
						<Link to="/anime"> Anime </Link>
					</li>
					<li>
						<Link to="/manga"> Manga </Link>
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
