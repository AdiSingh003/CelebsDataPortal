import React, { useState,useEffect } from 'react'
import ViewAccordion from './ViewAccordion';

function InsideAccordion({stateData, dob, setCelebritiesData,celebritiesData}) {

    const[userAge, setUserAge] = useState()
    const[editcliked, setEditClicked] = useState(false);

   useEffect(()=>{
    setUserAge(calculateAge());
   })

   function calculateAge(){
    const ageDifMs = Date.now() - new Date(dob).getTime();
    const ageDate = new Date(ageDifMs);
    let agee = parseInt(Math.abs(ageDate.getUTCFullYear()-1970)); 
   return agee
   }



  return (
    <>
         <ViewAccordion setCelebritiesData={setCelebritiesData} celebritiesData={celebritiesData} userAge={userAge} stateData={stateData} setEditClicked={setEditClicked} editcliked={editcliked}/>
    </>
   
  )
}

export default InsideAccordion