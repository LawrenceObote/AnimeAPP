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
			info2: [],
			search: false,
		};

		this.clearButton = this.clearButton.bind(this);
		this.submitButton = this.submitButton.bind(this);
		this.getInfo = this.getInfo.bind(this);
		this.randomCat = this.randomCat.bind(this);
	}

	async randomCat() {
		try {
			const [getAnimeData, getData] = await Promise.all([
				axios.get(
					`https://kitsu.io/api/edge/anime?filter[categories]=${this.state.answers}`
				),
				axios.get(
					`https://kitsu.io/api/edge/manga?filter[categories]=${this.state.answers}`
				),
			]);

			// const getData = await axios.get(
			// `https://kitsu.io/api/edge/manga?filter[categories]=${this.state.answers}`
			// );

			this.setState({
				info: getAnimeData.data.data,

				info2: getData.data.data,
			});

			console.log(this.state.info);
			console.log(getData);
			console.log(getAnimeData);
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
		this.setState({ search: false, answers: '' });
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
						<h3 className="text-white search">
							{' '}
							Anime & Manga search by Category{' '}
						</h3>

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
								<h1 className="text-body">
									Title : {response.attributes.canonicalTitle} <br />
									Japenese Title : {response.attributes.titles.ja_jp}
								</h1>
								<br></br>
								<img
									className="anime-cover"
									src={response.attributes.posterImage.small}
									alt="Anime-Poster-Cover"
								></img>
								<br />

								<p>
									Series Status : {response.attributes.status}
									<br />
									Start of Series : {response.attributes.startDate}
									<br />
									End of Series : {response.attributes.endDate}
									<br />
									Type : {response.type}
								</p>

								<p>
									Rating : {response.attributes.ageRating}
									<br />
									Rating Guide : {response.attributes.ageRatingGuide}
									<br />
									Episodes Count : {response.attributes.episodeCount}
								</p>
								<p> {response.attributes.synopsis} </p>
							</div>
						);
					})}
				</div>

				<div>
					{this.state.info2.map((response, index) => {
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
									Rating : {response.attributes.ageRating}
									<br />
									<br />
									Type : {response.type}
								</p>
								<p>
									Series Status : {response.attributes.status}
									<br />
									Chapter Count : {response.attributes.chapterCount}
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
