import React, { Component } from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'
import axios from 'axios';

export default class CommentExampleComment extends Component {

    state = {
        name: '',
        comment: '',
        id:0,
        info: [],
        number: this.getID
    }

    // writeUserData = (id, name, comment) => {
    //     var firebase = require("firebase/app");
    //     require("firebase/auth");
    //     require("firebase/firestore");
    //     firebase.database().ref('comments/' + id).set({
    //       name: this.state.name,
    //       comment: this.state.comment
    //     });
    //   }

    //   updateID = () => {
    //       axios.get()
    //   }

    // async getID() {
    //     let number = await axios.get(`https://animeapi-10ee6.firebaseio.com/number.json`).then
    //     let num = number.data.num;
    //     console.log("aaa", number.data.num);
    //     console.log("111", num);

    //     return num;
    // }

     async getID() {
        try {
          const number = await axios.get(`https://animeapi-10ee6.firebaseio.com/number.json`);
          console.log(number.data.num);
          this.setState({number: number.data.num})
          console.log("woah",number.data.num);
          return number.data.num;
        } catch(e) {
          console.error(e);
        }
      }

      async setID(){
        let data = {
            number: this.getID + 1,
            num: this.state.num + 1
        }
        axios.patch(`https://animeapi-10ee6.firebaseio.com/${this.state.num}.json`, data).then(response =>{
        })
        this.setState({
            number: this.state.number + 1
        })
        console.log("qqq", this.state.number);
      }
    

    postDataHandler = (e) =>{

        e.preventDefault();
        let dataName = {
            //id will require a function to make a unique id
            id: this.state.id,
            name: this.state.name,
        }
        let dataComment = {
            //id will require a function to make a unique id
            id: this.state.id,
            comment: this.state.comment
        }
        console.log("argh", this.state.number)
        axios.put(`https://animeapi-10ee6.firebaseio.com/${this.state.number}.json`, dataComment).then(response =>{
            // console.log(this.state.id);
            // console.log(response);
            // console.log(this.state.id);
            // console.log(this.state.name);
            
        })
        axios.put(`https://animeapi-10ee6.firebaseio.com/${this.state.number}/name.json`, dataName).then(response =>{


        })
        this.setState({
            number: this.getID + 1
        })
        // axios.patch(`https://animeapi-10ee6.firebaseio.com/number.json`, this.state.number + 1).then(response =>{
        // })
        // console.log("qqq", this.state.number);
        this.setID();
        
    }


    onChangeHandler = async e => {
        e.preventDefault();
        console.log(e.target.value);
        this.setState({value: e.target.value.toLowerCase()})
        console.log(this.state);
    }

    // deleteDataHandler = (e) =>{
    //     e.preventDefault();
    //     axios.delete
    // }

    async displayComments() {
        try {
          const response = await axios.get(`https://animeapi-10ee6.firebaseio.com/comments/.json`);
        //   console.log("aaaa", response.data);
          this.setState({info: [response.data]})
          const commentsList = this.state.info.map(info => {
            
            return(
            <div>
                <li key={this.state.id}>{this.state.name}</li>
                <li key={this.state.id}>{this.state.comment}</li>
            </div>
            )
        })
        } catch(e) {
          console.error(e);
        }
      }




      componentDidMount(){
          this.displayComments();
          this.getID();
      }

    render() {

        const commentsList = this.state.info.map(info => {
            
            return(
            <div>
                <li key={this.state.id}>{this.state.comment}</li>
            </div>
            )
        })

        

        return (
            <Comment.Group>
    <Header as='h3' dividing>
      Comments
    </Header>

    <ul>
        {commentsList}
    </ul>

    

    <Form reply id="commentForm" onSubmit={this.postDataHandler}>
      <Form.TextArea placeholder="Enter your name here" type="text" name="name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
      <Form.TextArea placeholder="Enter your comment here" type="text" name="comment" value={this.state.comment} onChange={(e) => this.setState({comment: e.target.value})} onSubmit={this.postDataHandler}/>
      <Button type="submit" content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>

   

  </Comment.Group>
        )
    }
}

