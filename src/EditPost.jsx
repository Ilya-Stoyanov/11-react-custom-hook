import React, {useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'

const EditPost = ({
    posts, handleEdit, editBody, setEditBody, editTitle, setEditTitle
}) => {
    const { id } = useParams();
    // add specific post
    const post = posts.find(post => (post.id).toString() === id)

    useEffect( () => {
        if(post){
            setEditTitle(post.title)
            setEditBody(post.body)
        }

    }, [post, setEditBody, setEditTitle])
  return (
    <main className='newPost'>
        {editTitle && 
            <>
                <h2>Edit Post</h2>
                <form className="newPostForm" onSubmit={ (e) => e.preventDefault()}>
                    <label htmlFor="postTitle">Title: </label>
                    <input 
                        type="text"
                        id="postTitle"
                        required
                        value={editTitle}
                        onChange={ e => setEditTitle(e.target.value)}
                    />
                    <label htmlFor="postBody">Body: </label>
                    <textarea 
                    id='postBody'
                    required
                    value={editBody}
                    onChange={e => setEditBody(e.target.value)}
                    />
                    <button type='submit' onClick={() => handleEdit(post.id)}>Submit</button>
                </form>
            </>
        
        } { !editTitle && 
            <>
              <h2>Post not found</h2>
              <p>Well.. That's disappoint... </p>
              <p>
                <Link to="/">Visit on our page</Link>
              </p>
            </>
  
          }
    </main>
  )
}

export default EditPost