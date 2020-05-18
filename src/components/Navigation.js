import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Manga from './Manga';
import SearchAPI from './SearchAPI';
import '../styles/Navigation.css';

function Navigation() {
	return (
		<Router>
			<nav className="nav-wrapper">
				<ul className="nav">
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
				<Route path="/anime" component={SearchAPI}></Route>
				<Route path="/manga" component={Manga}></Route>
			</Switch>
		</Router>
	);
}

export default Navigation;
