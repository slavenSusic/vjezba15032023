import React from 'react'
import classes from './Post.module.css'

const names=['max', 'manuel']

const Post = (props) => {

   
  return (
    <div className={classes.post}>
        <p className={classes.author}> {props.author}</p>
        <p className={classes.post}>{props.body} </p>
        <button onClick={props.onDeletepost}> Delete</button>
    </div>
  )
}

export default Post