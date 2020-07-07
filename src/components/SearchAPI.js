import React, { Component } from 'react';
import axios from 'axios';
import '../styles/SearchAPI.css';

export default class SearchAPI extends Component {
  constructor(props) {
    super(props);

    // input takes in user input from a text input field and title takes the response from api
    this.state = {
      input: '',
      title: [],
    };
    // binds functions
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // function changes state to the user input
  handleUserInput(e) {
    e.preventDefault();

    this.setState({
      input: e.target.value,
    });
    console.log(this.state.input);
  }

  // function makes api call using axios
  handleSubmit(e) {
    // end point stored in a const var
    const endPoint = 'https://kitsu.io/api/edge/anime?filter[text]=';
    console.log(this.state.input);

    // makes get request and concatinates input at the end of the endpoint. The user enters a catagory of Anime and is used as a param for the endpoint to satisfy a users specific request.
    axios
      .get(endPoint + this.state.input)

      // returns a promise request and we set it as our state
      .then((Response) => {
        console.log(Response.data.data);
        this.setState({
          title: Response.data.data,
        });
      })
      // catches any errors in the unfortunate event response doesn't return
      .catch((error) => {
        console.log(error);
      });

    e.preventDefault();
  }

  render() {
    return (
      <div className="text-submit">
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              id="search-anime"
              type="text"
              value={this.state.input}
              onChange={this.handleUserInput}
            />
            <h3 className="text-white">Anime Search</h3>
            <input className="button" type="submit" value="Submit" />
          </form>
        </div>
        <br />

        {this.state.title.map((iterate) => {
          return (
            <div className="blue">
              <h1>
                {' '}
                {iterate.attributes.titles.en} <br></br>
                {iterate.attributes.titles.ja_jp}
              </h1>
              <br></br>
              <img
                className="image"
                src={iterate.attributes.posterImage.small}
                alt="anime/manga"
              />
              <br></br>
              <p> {iterate.attributes.synopsis} </p>
              <br></br>
            </div>
          );
        })}
      </div>
    );
  }
}
