import React from 'react';

const Posts = ({ posts,  }) => {
 

  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          {post.name}
          <br></br>
          {post.main_parent}
          <br></br>
          {post.parent_off}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
