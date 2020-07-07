import React from 'react';
import axios from 'axios';
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
    this.setState({ answers: '', search: false });
  }

  render() {
    return (
      <div>
        <div className="manga-wrapper">
          <form onSubmit={this.submitButton}>
            <input
              id="search-anime"
              type="text"
              value={this.state.answers}
              onChange={this.getInfo}
            />
            <h3 className="text-white">Manga Search</h3>
            <input
              className="button"
              type="submit"
              value="Submit"
              onClick={this.getManga}
            />
          </form>
        </div>
        <br />

        <div>
          {this.state.info.map((response, index) => {
            return (
              <div className="manga-response" key={index}>
                <h1 className="text-white text-b">
                  Title : {response.attributes.canonicalTitle}
                </h1>
                <h1 className="text-white text-b">
                  Japenese Title : {response.attributes.titles.ja_jp}
                </h1>
                <br></br>
                <img
                  className="manga-cover"
                  src={response.attributes.posterImage.small}
                  alt="Manga-Poster-Cover"
                ></img>
                <br />
                <p>
                  {' '}
                  Rated : {response.attributes.ageRating}
                  <br />
                  Rating : {response.attributes.averageRating}
                </p>
                <br></br>
                <br></br>
                <p>
                  Series Status : {response.attributes.status}
                  <br></br>
                  Start Date : {response.attributes.startDate}
                  <br></br>
                  End Date : {response.attributes.endDate}
                </p>
                <br></br>
                <h4 className="text-body">
                  Volume Count : {response.attributes.volumeCount} <br />
                  Serialization : {response.attributes.serialization}
                </h4>
                <br></br>
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
