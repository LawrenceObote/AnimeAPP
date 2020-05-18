import React from 'react';
import axios from 'axios';
import Natsu from '../images/Natsu.png';
import Aggretsuko from '../images/Aggretsuko.png';
import '../styles/MangaPage.css';

class Manga extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			info: [],
			search: false,
		};

		this.clearButton = this.clearButton.bind(this);
		this.submitButton = this.submitButton.bind(this);
		this.getInfo = this.getInfo.bind(this);
		this.getManga = this.getManga.bind(this);
	}

	async getManga() {
		try {
			const getManga = await axios.get(
				`https://kitsu.io/api/edge/manga?filter[text]=${this.state.answers}`
			);

			this.setState({
				info: getManga.data.data,
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
				<small className="text-muted"> Manga search </small>
				<div className="manga-wrapper">
					<form className="manga-form" onSubmit={this.submitButton}>
						<br />
						<input
							className="manga-text-field"
							id="borderimg1"
							type="text"
							value={this.state.answers}
							onChange={this.getInfo}
						/>

						<br />
						<input
							className="text-button"
							id="manga-sumbit"
							type="image"
							src={Natsu}
							alt="Natsu from Fairy Tails"
							onClick={this.getManga}
						/>
						<input
							className="text-button1"
							id="manga-clear"
							type="image"
							src={Aggretsuko}
							alt="Aggretsuko"
							onClick={this.clearButton}
						/>
					</form>
				</div>

				<div>
					{this.state.info.map((response, index) => {
						return (
							<div className="manga-response" key={index}>
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
								<p> Rating : {response.attributes.ageRating} </p>
								<p> {response.attributes.synopsis} </p>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}

export default Manga;
