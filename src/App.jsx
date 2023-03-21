

import PostList from './components/PostList'
import MainHeader from './components/MainHeader'
import { useState } from 'react'

function App() {
  const [modalIsVisible, setModalIsvisible] =useState(false)
  
  const modalChangeHandler= () => {
    setModalIsvisible(false)
  }

  const showModalhandler= () => {
    setModalIsvisible(true)
  }

  return (
    <>

    <MainHeader isShown={showModalhandler}/>
    <main>

    <PostList isClosed={modalChangeHandler} modalIsVisible={modalIsVisible}/>

    </main>
  </>

  )
}

export default App
