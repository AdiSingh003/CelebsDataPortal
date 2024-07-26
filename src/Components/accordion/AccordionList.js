import React,{useState, useEffect} from 'react'
import '../../App.css'
import {celebrities} from './celebrities'
import Accordion from './Accordion'

function AccordionList() {
    const [celebritiesData, setCelebritiesData]= useState(celebrities)
    const[searchTerm, setSearchTerm] = useState("");
    useEffect(() => {
      setCelebritiesData(celebrities.filter((data) =>
        data.first.toLowerCase().includes(searchTerm)
      ));
    }, [searchTerm]);
    const searchHandler = (event) => {
      setSearchTerm(event.target.value.toLowerCase());
    };
      
  return (
    <>
   <main className='mainn'>
    <div className='container'>
        <div>
        <input className='search-bar' type="text" placeholder ="Search user" onChange={searchHandler}/>
        </div>
        <section className='sectionfirst'>
        {
            celebritiesData.map((data)=>{
                return <Accordion key={data.id} {...data} celebritiesData={celebritiesData} setCelebritiesData={setCelebritiesData} stateData={data}/>
            })
        }
        </section>
       </div>
    </main>
    </>
    
  )
}

export default AccordionList