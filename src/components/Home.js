import React from 'react';
import '../App.css';
import axios from 'axios';
import '../styles/Home.css';
import Mashup from '../images/Mashup.png';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			info: [],
			search: false,
		};

		this.clearButton = this.clearButton.bind(this);
		this.submitButton = this.submitButton.bind(this);
		this.getInfo = this.getInfo.bind(this);
		this.randomCat = this.randomCat.bind(this);
	}

	async randomCat() {
		try {
			const getData = await axios.get(
				`https://kitsu.io/api/edge/manga?filter[categories]=${this.state.answers}`
			);

			this.setState({
				info: getData.data.data,
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
			<div>
				<div className="home-wrapper">
					<form className="home-form" onSubmit={this.submitButton}>
						<h3>
							<small className="text-muted"> Search Bar </small>
						</h3>
						<input
							className="home-text-field"
							id="borderimg1"
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
							<div className="home-response" key={index}>
								<p> {response.name} </p>
								<p> {response.id}</p>
								<p> {response.synopsis}</p>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Home;
