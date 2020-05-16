import React from 'react';
import '../App.css';
import axios from 'axios';
import '../styles/Home.css'

import Mashup from '../images/Mashup.png';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			info: [],
			search: false,
			race: this.props.id,
		};

		this.clearButton = this.clearButton.bind(this);
		this.submitButton = this.submitButton.bind(this);
		this.getInfo = this.getInfo.bind(this);
		this.randomCat = this.randomCat.bind(this);
	}
	async randomCat() {
		try {
			const getData = await axios.get(
				`https://kitsu.io/api/edge/manga?filter[categories]=horror`
			);

			console.log(getData.data);

			this.setState({
				info: getData.data,
			});
		} catch (error) {
			console.log(error);
		}
	}

	getInfo(event) {
		event.preventDefault();
		this.setState({ answers: event.target.value });
	}

	submitButton(e) {
		e.preventDefault();
		this.setState({ search: true });
	}

	clearButton() {
		this.setState({ getId: '', search: false });
	}

	render() {
		return (
			<div className="home-wrapper">
				<div>
					<div className="home-img-wrapper">
						{/* <img className="img" src={Mashup} alt="Anime"  /> */}
						{/* <img className="mini-weedies2" src={mini2} alt="Yin Feeling" /> */}
						{/* <img className="Canna" src={sativaplant} alt="Sativa Plant" /> */}
					</div>
					<form className="form-race" onSubmit={this.submitButton}>
						<h3>
							<small className="text-muted">Search Bar</small>
						</h3>
						<input
							className="text-field3"
							type="text"
							value={this.state.answers}
							onChange={this.getInfo}
						/>
						<input
							className="text-button"
							type="submit"
							onClick={this.randomCat}
						/>
						<button
							className="text-button"
							type="button"
							onClick={this.clearButton}
						>
							Clear
						</button>
					</form>
				</div>

				<div>
					{this.state.info.map((response, index) => {
						return (
							<div className="strain-race-results" key={index}>
								<p> Name :{response.name} </p>
								<p> Strain ID :{response.id}</p>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Home;
