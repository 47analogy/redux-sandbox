import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

function Posts(props) {
  useEffect(() => {
    props.fetchPosts();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {props.posts.map(post => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
const mapStateToProps = state => ({
  posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(Posts);
