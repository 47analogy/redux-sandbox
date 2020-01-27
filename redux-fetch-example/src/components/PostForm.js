import React, { useState } from 'react';
import axios from 'axios';

function PostForm() {
  const [title, setTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  const post = {
    title: title,
    postBody: postBody,
  };

  const postData = e => {
    e.preventDefault();
    axios
      .post('https://jsonplaceholder.typicode.com/posts', {
        // headers: {
        //   'content-type': 'application/json',
        // },
        body: post,
      })
      .then(res => res.data)
      .then(data => console.log(data));
  };

  return (
    <div>
      <h1>Add Posts</h1>
      <form onSubmit={postData}>
        <div>
          <label>Title: </label>
          <br />
          <input
            type='text'
            name='title'
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <br />
        <div>
          <label>Body: </label>
          <br />
          <textarea
            name='body'
            value={postBody}
            onChange={e => setPostBody(e.target.value)}
          />
        </div>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}
export default PostForm;
