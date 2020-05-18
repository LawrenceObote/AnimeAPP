
import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navigation from './components/Navigation';
import './styles/App.css';
import Comment from './components/Comment';
import firebase from './firebase';
import './styles/Comment.css';



function App() {
  const[comments, setComments] = React.useState([])
  const[newCommentName, setNewCommentName] = React.useState()

//React Hooks
//useEffect allows us to run some additional code when the components are mounted or updated. (after every render)
  React.useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore()
      //snapshot is a document listener. Everytime the document is changed a new snapshot is taken.
      db.collection('comments').orderBy('time', 'desc').onSnapshot((snapshot) => {
        const commentsData = []
        //... adds the new documents to the commentsData array
        snapshot.forEach(doc => commentsData.push(({...doc.data(), id: doc.id})))
        setComments(commentsData)
      })
    }
    fetchData()
  }, [])



  const onCreate = () =>{
    const db = firebase.firestore();
    //add function creates a new document inside of the comments collection
    db.collection('comments').add({
      name: newCommentName,
      time : Date.now()
    });


  }
  return (
    <div className="App">
      <Navigation />

      <ul>
      <input id="new-comment-box" value={newCommentName}
             onChange={e => setNewCommentName(e.target.value)}
      />
      
      <button className="button" id="create-button" onClick={onCreate}>Create</button>
      {/* map */}
      {comments.map(comment => (
        <li id="list-comment" key={comment.time}>
        <Comment comment={comment}/>
        </li> 
      ))}
      </ul>

    </div>
  );
}

export default App;