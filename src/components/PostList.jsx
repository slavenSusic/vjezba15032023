import React from "react";
import NewPost from "./NewPost";
import Post from "./Post";
import classes from "./PostList.module.css";
import { useState, useEffect } from "react";
import Modal from "./Modal";
function PostList(props) {

  const [posts, setPosts]= useState([])
  


  useEffect(() => {
     async function fetchPosts() {
     const response = await fetch('http://localhost:8080/posts')
      const resData =await response.json()
      setPosts(resData.posts)
    }
    fetchPosts()
  },[]);




  const addPostHandler= (postData) =>{
    fetch('http://localhost:8080/posts', {
      method:'POST',
      body:JSON.stringify(postData), 
      headers: {
        'Content-Type' : 'application/json'
      }
    })
    setPosts([postData, ...posts])
  }



   
  


  return (
    <>
    {props.modalIsVisible && ( <Modal onClose={props.isClosed}>
      <NewPost
     
        onClose={props.isClosed} onAddPost={addPostHandler}   />
      </Modal>  )}
      <ul className={classes.posts}>
    
       {posts.map(post => <Post key={post.body} author={post.author} body={post.body}/>,  )}
      </ul>
    { posts.length ===  0 && <p>No post to show</p>}
    </>
  );
}

export default PostList;
