import React from 'react'
import '../../App.css'
import AccordionList from '../accordion/AccordionList'

function Home() {
  return (
    <>
    <header className='nav'>
        <h2> Celebrity Data Portal</h2>
    </header>

    
    <AccordionList/>
    </>
  )
}

export default Home