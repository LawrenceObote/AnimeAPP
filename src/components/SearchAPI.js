import React, { Component } from 'react'
import axios from 'axios';

export default class SearchAPI extends Component {
    constructor(props) {
        super(props)

        this.state = {
            input: '',
            title: []
        }

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
                // [0].attributes.titles.en
                // [0].attributes.titles.en
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

                {/*<br />
                {this.state.otherTitle}
                <br /> */}
                {/* <img src={this.state.image}></img> */}
            </div>
        )
    }
}
