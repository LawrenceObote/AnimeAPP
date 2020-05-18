import React, { Component } from 'react'
import axios from 'axios';
import '../styles/SearchAPI.css';

export default class SearchAPI extends Component {
    constructor(props) {
        super(props)

        // input takes in user input from a text input field and title takes the response from api
        this.state = {
            input: '',
            title: []
        }
        // binds functions
        this.handleUserInput = this.handleUserInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }



    // function changes state to the user input
    handleUserInput(e) {

        e.preventDefault()

        this.setState({
            input: e.target.value

        })
        console.log(this.state.input);
    }

    // function makes api call using axios
    handleSubmit(e) {
        // end point stored in a const var
        const endPoint = 'https://kitsu.io/api/edge/anime?filter[text]=';
        console.log(this.state.input);

        // makes get request and concatinates input at the end of the endpoint. The user enters a catagory of Anime and is used as a param for the endpoint to satisfy a users specific request.
        axios.get(endPoint + this.state.input)

            // returns a promise request and we set it as our state
            .then((Response => {
                console.log(Response.data.data)
                this.setState({
                    title: Response.data.data
                })
            }))
            // catches any errors in the unfortunate event response doesn't return
            .catch((error) => {
                console.log(error);
            })

        e.preventDefault();
    }




    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Category:
                        <input type="text" value={this.state.input} onChange={this.handleUserInput} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>

                {this.state.title.map((iterate) => {
                    return (
                        <div className="blue">
                            <h2> {iterate.attributes.titles.en} </h2>
                            <br></br>
                            <img src={iterate.attributes.posterImage.small} />
                            <br></br>
                            <h2>{iterate.attributes.titles.ja_jp}</h2>
                            <br></br>
                            <p> {iterate.attributes.synopsis} </p>
                        </div>

                    )
                })}
            </div>
        )
    }
}
