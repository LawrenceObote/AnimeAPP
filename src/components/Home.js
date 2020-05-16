import React from 'react';
import axios from 'axios';
import '../styles/Home.css';
import '../styles/App.css';
import Pika from '../images/Pika.png';
import umaru from '../images/umaru.png';

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
			console.log(this.state.info);
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
						<br />
						<input
							className="home-text-field"
							id="borderimg1"
							type="text"
							value={this.state.answers}
							onChange={this.getInfo}
						/>
						<br />
						<small className="text-muted"> Manga search by Category </small>

						<br />
						<input
							className="text-button"
							id="home-sumbit"
							type="image"
							src={umaru}
							alt="Umaru with a coke"
							onClick={this.randomCat}
						/>
						<input
							className="text-button"
							id="home-clear"
							type="image"
							src={Pika}
							alt="Pikachu"
							onClick={this.clearButton}
						/>
					</form>
				</div>

				<div>
					{this.state.info.map((response, index) => {
						return (
							<div className="home-response" key={index}>
								<img
									className="manga-cover"
									src={response.attributes.posterImage.small}
									alt="Manga-Poster-Cover"
								></img>
								<br />
								<h4 className="text-body">
									Title : {response.attributes.canonicalTitle} <br />
									Japenese Title : {response.attributes.titles.ja_jp}
								</h4>
								<p>
									{' '}
									Rating : {response.attributes.ageRating}
									{response.attributes.volumeCount}
								</p>
								<p>
									Series Status : {response.attributes.status} <br />
									Chapter Count : {response.attributes.chapterCount} <br />
									Serialization : {response.attributes.serialization}
								</p>
								<p> {response.attributes.synopsis} </p>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
export default Home;