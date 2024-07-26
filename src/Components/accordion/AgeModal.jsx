import React from 'react'
import '../../App.css'

function AgeModal() {
  return (
    <>
    <button onClick={toggleAgeModal} className="btn-modal">
      Open
    </button>

    {modal && (
      <div className="modal">
        <div onClick={toggleAgeModal} className="overlay"></div>
        <div className="modal-content">
          <h2>Age below 18 are not allowed to edit!!</h2>
          <button className="close-modal" onClick={toggleAgeModal}>
            CLOSE
          </button>
        </div>
      </div>
    )}
    
  </>
  )
}

export default AgeModal