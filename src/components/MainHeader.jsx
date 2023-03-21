import { MdPostAdd, MdMessage } from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader(props) {
    
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
     Post It
      </h1>
      <p>
        <button className={classes.button} onClick={props.isShown}>
          <MdPostAdd size={18} />
          New Post
        </button>
      </p>
    </header>
  );
}

export default MainHeader;