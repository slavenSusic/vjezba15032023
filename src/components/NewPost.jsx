import React from 'react'
import classes from './NewPost.module.css'
import { useState } from 'react';




function NewPost(props) {
  const [enteredBody, setEnteredBody] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");

  const bodyChangeHandler = (e) => {
    setEnteredBody(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };

  const formSubmmitHandler = (e) => {
    e.preventDefault()
    const formData= {
      body:enteredBody, 
      author:enteredAuthor
    }

    props.onAddPost(formData)
    props.onClose()

  }


  return (
    <form className={classes.form} onSubmit={formSubmmitHandler}>
        <p >
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows="3" onChange={bodyChangeHandler}></textarea>
        </p>

        <p>
            <label htmlFor="name">Your name</label>
            <input type="text" id="name" onChange={authorChangeHandler} />
        </p>
        <p className={classes.actions}>
        { <button type="button" onClick={props.onClose}>Cancel</button> }
        <button>Submit</button>
        <button></button>
        </p>
        
        </form>




  )
}

export default NewPost