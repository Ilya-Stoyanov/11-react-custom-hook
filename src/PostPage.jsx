import React from 'react'
import { useParams, Link } from "react-router-dom"

const PostPage = ({posts, handleDelate}) => {
  const {id} = useParams()

  const post = posts.find(post => (post.id).toString() === id)
  // console.log(id);
  return (
    <main className="postPage">
      <article className='post'>
        { post && 
          <>
            <h2>
              {post.title}
            </h2>
            <p className="postData">
              {post.datetime}
            </p>
            <p className="postBoy">
              {post.body}
            </p>
            <Link to={`/post/${post.id}/edit`}>
              <button className="editBtn">Edit Post</button>
            </Link>
            <button onClick={() => handleDelate(post.id)} className='deleteBtn'>
              Delete Post
            </button>
          </>
        } { !post && 
          <>
            <h2>Post not found</h2>
            <p>Well.. Thet's dissapoint... </p>
            <p>
              <Link to="/">Visit on our page</Link>
            </p>
          </>

        }
      </article>
  </main>
  )
}

export default PostPage