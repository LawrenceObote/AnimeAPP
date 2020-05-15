import React from 'react';
import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
import Anime from './Anime';
import Manga from './Manga';
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
				<Route path="/anime" component={Anime}></Route>
				<Route path="/manga" component={Manga}></Route>
			</Switch>
		</Router>
	);
}

export default Navigation;

// import React from 'react';
// // import { Route, Switch, Link, BrowserRouter as Router } from 'react-router-dom';
// import Home from './Navigation';
// import Anime from './Anime';
// import Manga from './Manga.js';
// import '../App.css';
//
// function Navigation() {
// return (
// <Router>
{
	/* <nav className="wrapper"> */
}
{
	/* <ul className="nav"> */
}
{
	/* <li> */
}
{
	/* <Link className="text-white" to="/"> */
}
{
	/* Home */
}
{
	/* </Link> */
}
{
	/* </li> */
}
{
	/* <li> */
}
{
	/* <Link className="text-white" to="/anime"> */
}
{
	/* Anime */
}
{
	/* </Link> */
}
{
	/* </li> */
}
{
	/* <li> */
}
{
	/* <Link className="text-white" to="/manga"> */
}
{
	/* Manga */
}
{
	/* </Link> */
}
{
	/* </li> */
}
{
	/* </ul> */
}
{
	/* </nav> */
}
{
	/* <Switch> */
}
{
	/* <Route exact path="/" component={Home}></Route> */
}
{
	/* {/* <Route exact path="/anime" component={Anime}></Route> */
}
{
	/* {/* <Route exact path="/manga" component={Manga}></Route> */
}
{
	/* </Switch> */
}
{
	/* </Router> */
}
// );
// }
// export default Navigation;
//
