import React, { Component } from 'react'
import axios from 'axios';

export default class SearchAPI extends Component {
    constructor(props) {
        super(props)

        // input takes in user input from a text input field and title takes the response from api
        this.state = {
            input: '',
            title: []
        }
        // binds functions
        this.searchAdventure = this.searchAdventure.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }




    searchAdventure(e) {

        e.preventDefault()

        this.setState({
            input: e.target.value

        })
        console.log(this.state.input);
    }


    handleSubmit(e) {
        const endPoint = 'https://kitsu.io/api/edge/anime?filter[categories]=';
        console.log(this.state.input);

        axios.get(endPoint + this.state.input)

            .then((Response => {
                console.log(Response.data.data)
                this.setState({
                    title: Response.data.data
                })
            }))
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
                        <input type="text" value={this.state.input} onChange={this.searchAdventure} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                {this.state.title.map((iterate) => {
                    return (
                        <div>
                            <h2> {iterate.attributes.titles.en} </h2>
                            <img src={iterate.attributes.posterImage.original} />
                            <h2>{iterate.attributes.titles.ja_jp}</h2>
                            <p> {iterate.attributes.synopsis} </p>
                        </div>

                    )
                })}
                {/*<br />
                {this.state.otherTitle}
                <br /> */}
                {/* <img src={this.state.image}></img> */}
            </div>
        )
    }
}
