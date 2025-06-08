import { useEffect, useState } from 'react'
import './App.css'
import './StyleNull.css'
import { Outlet } from 'react-router-dom'
import HomeHeader from './components/header/HomeHeader'
import HomeFooter from './components/footer/HomeFooter'
import { useDispatch } from 'react-redux'
import { allBooks } from './thunks/booksThunks'

function App() {

  const dispatch =useDispatch();

  useEffect(() => {
    dispatch(allBooks());
  },[]);


  return (
    <>
      <div className='main-block-wrapper'>
        <header>
          <HomeHeader />
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <HomeFooter />
        </footer>
      </div>
    </>
  )
}

export default App
