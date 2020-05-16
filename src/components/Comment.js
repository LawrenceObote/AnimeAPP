import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import axios from 'axios';

export default class CommentExampleComment extends Component {

    state = {
        name: '',
        comment: '',
        id: ''
    }

    postDataHandler = (e) =>{
        e.preventDefault();
        const Data = {
            //id will require a function to make a unique id
            id: this.state.id,
            name: this.state.name,
            comment: this.state.comment,
        }
        axios.post("https://animeapi-10ee6.firebaseio.com/.json", Data).then(response =>{
            console.log(response);
            this.setState({
                id: '',
                name: '',
                comment: ''
            })
        })
    }


    onChangeHandler = async e => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({value: e.target.value.toLowerCase()})
        console.log(this.state);
    };



    render() {
        return (
            <Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>

    

    <Form reply id="commentForm" onSubmit={this.postDataHandler}>
      <Form.TextArea placeholder="Enter your name here" type="text" name="name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
      <Form.TextArea placeholder="Enter your comment here" type="text" name="comment" value={this.state.comment} onChange={(e) => this.setState({comment: e.target.value})}/>
      <Button type="submit" content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
        )
    }
}

