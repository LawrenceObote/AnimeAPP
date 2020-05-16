import React, { Component } from 'react'
import axios from 'axios';

export default class SearchAPI extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            otherTitle: '',
            image: ''
        }
    }

    componentDidMount() {

        const endPoint = 'https://kitsu.io/api/edge/anime?filter[categories]=adventure';

        axios.get(endPoint)
            .then((Response => {
                console.log(Response.data.data[0].attributes.titles.en);
                console.log(Response.data.data[0].attributes.titles.ja_jp);
                console.log(Response.data.data[0].attributes);
                console.log(Response.data.data[0].attributes.posterImage.original)

                this.setState({

                    title: Response.data.data[0].attributes.titles.en,
                    otherTitle: Response.data.data[0].attributes.titles.ja_jp,
                    image: Response.data.data[0].attributes.posterImage.original
                })
            }))
            .catch((error) => {
                console.log(error);
            })
    }


    render() {
        return (
            <div>
                {this.state.title}
                <br />
                {this.state.otherTitle}
                <br />
                <img src={this.state.image}></img>
            </div>
        )
    }
}
