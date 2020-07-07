import React from 'react';
import firebase from '../firebase';

export const Comment = ({ comment }) => {
  //useState allows use to useState in functional components
  const [name, setName] = React.useState(comment.name);

  const onDelete = () => {
    const db = firebase.firestore();
    db.collection('comments').doc(comment.id).delete();
  };

  const onUpdate = () => {
    const db = firebase.firestore();
    //set function takes the old document and updates it with the new info
    //... inserts the old info into a new array

    db.collection('comments')
      .doc(comment.id)
      .set({ ...comment, name });
  };

  return (
    <div>
      <div className="form-group">
        <label className="text-white" for="comment">
          Comment:
        </label>
        <textarea
          class="form-control"
          rows="4"
          id="comment"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></textarea>
      </div>

      <div className="buttons">
        <button
          className="button text-white"
          id="create-button"
          onClick={onUpdate}
        >
          Update
        </button>
        <button
          className="button text-white"
          id="delete-button"
          onClick={onDelete}
        >
          Delete
        </button>
      </div>
      <br></br>
    </div>
  );
};

export default Comment;
