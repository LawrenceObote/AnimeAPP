import React from 'react'
import firebase from '../firebase'

export const Comment = ({ comment }) => {
  //useState allows use to useState in functional components
  const[name, setName] = React.useState(comment.name);
  const[time, setTime] = React.useState(comment.time);

  const onDelete = () => {
    const db = firebase.firestore()
    db.collection('comments').doc(comment.id).delete()
  }

  const onUpdate = () => {
    const db = firebase.firestore()
    //set function takes the old document and updates it with the new info
    //... inserts the old info into a new array

    db.collection('comments').doc(comment.id).set({...comment, name})
  }


  return (
      <div>
        <input value={name} onChange={e => {
          setName(e.target.value)}}/>
          <button onClick={onUpdate}>Update</button>
          <button onClick={onDelete}>Delete</button>
        

      </div>
  )
}

export default Comment