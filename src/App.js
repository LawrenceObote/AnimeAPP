
import React from 'react';
import './App.css';
import Comment from './components/Comment';

function App() {

  const onCreate = () =>{
    const db = firebase.firestore()
    db.collection('comments').add({name: newCommentName})
  }
  return (
    <div className="App">
      <input value={newCommentName}
             onChange={e => setNewCommentName(e.target.value)}
      />
      <button onClick={onCreate}>Create</button>
      {comments.map(comment => (
        <li key={comment.name}>{comment.name}
        <Comment comment={comment}/>
        </li> 
      ))}
    </div>
  );
}

export default App;