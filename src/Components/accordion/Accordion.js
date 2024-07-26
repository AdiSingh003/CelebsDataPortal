import React,{useState} from 'react'
import '../../App.css'
import { BiDownArrow, BiUpArrow } from 'react-icons/bi';
import {CgProfile} from 'react-icons/cg'
import InsideAccordion from './InsideAccordion';

function Accordion({stateData, celebritiesData, setCelebritiesData}) {
    const [showinfo, setShowinfo] = useState(false);
    function accordionHandler(){
      setShowinfo(!showinfo)
    }
  return (
    <>
           <article className="single-accordion">
            <header>
              <div className='profile-name'>
              <h2>{<CgProfile/>}</h2>
              <h4>{stateData.first} {stateData.last} </h4>
              </div>
             
            <button className='btn' onClick={accordionHandler}>
                {showinfo? <BiUpArrow />:<BiDownArrow/>}
            </button>
            </header>
               
                { showinfo &&  <div > {<InsideAccordion stateData={stateData} dob={stateData.dob} setCelebritiesData={setCelebritiesData} celebritiesData={celebritiesData}/>}</div> }
            </article>
            
         
    </>
  )
}

export default Accordion;