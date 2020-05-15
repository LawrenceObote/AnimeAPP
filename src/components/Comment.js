import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import Results from './results';
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

    <Comment>
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <div>Today at 5:42PM</div>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Content>
        <Comment.Author as='a'>Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <div>Yesterday at 12:30AM</div>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Content>
            <Comment.Author as='a'>Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <div>Just now</div>
            </Comment.Metadata>
            <Comment.Text>Elliot you are always so right :)</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Content>
        <Comment.Author as='a'>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <div>5 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Form reply id="commentForm" onSubmit={this.postDataHandler}>
      <Form.TextArea type="text" name="name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
      <Form.TextArea type="text" name="comment" value={this.state.comment} onChange={(e) => this.setState({comment: e.target.value})}/>
      <Button type="submit" content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </Comment.Group>
        )
    }
}

