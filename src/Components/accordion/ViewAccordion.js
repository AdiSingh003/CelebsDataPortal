import React, { useState } from "react";
import Trash_Icon from "../../assets/img/icons8-trash.svg";
import Edit_Icon from "../../assets/img/icons8-edit.svg";
import Close_Icon from "../../assets/img/icons8-close.png";
import Checkmark_Icon from "../../assets/img/icons8-checkmark.svg";
import Cross_Icon from "../../assets/img/icons8-cross.svg";


function ViewAccordion({
  userAge,
  stateData,
  setEditClicked,
  editcliked,
  celebritiesData,
  setCelebritiesData,
}) {

  const [updatecountry, setUpdateCountry] = useState(stateData.country);
  const [updateGender, setUpdateGender] = useState(stateData.gender);
  const [updateDescription, setUpdateDescription] = useState(stateData.description);
  const [showAgeModal, setShowAgeModal] = useState(false)
  const[disableOkbtn, setDisableOkbtn] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  

  const onChangeinDescription = (event) => {
    console.log("on change in desc");
    if(event.target.value === "")
    {
        setDisableOkbtn(true)
    }
    else
    {
        setDisableOkbtn(false)
        setUpdateDescription(event.target.value);
    }
    

  };

  const onChangeinGender = (event) => {
    console.log("on change in gender");
    setUpdateGender(event.target.value);
  };

  function toggleAgeModal(){
    setShowAgeModal(!showAgeModal);
  }

  function toggleDeleteModal(event){
    console.log("delete handler triggered");
    console.log(event.target.value);
    if(event.target.value == "no")
    {
        setShowDeleteModal(false);
    }
    if(event.target.value == "yes")
    {
        setCelebritiesData(celebritiesData.filter((item)=>item.id != stateData.id));
        setShowDeleteModal(true)
    }
    
  }
  const onChangeinCountry = (event) => {
    console.log(" Inside Method ", event.target.value);

    if(event.target.value === "")
    {
            setDisableOkbtn(true)
    }
    else{
       
        setUpdateCountry(event.target.value.replace(/[^a-z]/gi, ''));
        setDisableOkbtn(false)
    }
    

  };

 const submitHandler = ()=>{
    if(updatecountry== "" || updateDescription == "")
    {
        setDisableOkbtn(true)
    }
    else{
        setCelebritiesData(
            celebritiesData.map((item)=>{
                if(item.id === stateData.id)
                {
                    return{
                        ...item,
                        country: updatecountry,
                        gender:updateGender,
                        description:updateDescription
                    };
                }
                
                return item;
            })
        )
        
        setEditClicked(false)

    }
       

}


const checkAgeHandler = ()=>{
    
    if(userAge<18)
    {
        setShowAgeModal(true)
        
    }
    else{
        setEditClicked(true)
    }
    console.log(userAge)
}



  return (
    <div className="view-accordion">
      <div className="a-gender-c">
        <div className="age-child">
          <h5>Age</h5>
          {
            editcliked?  (<input
            disabled
            type="text"
            value={userAge}
           
          />):(
            <p>{userAge} years</p> 
          )
          }
        </div>

        <div className="gender-child">
          <h5>Gender</h5>
          {editcliked ? (
            <select onChange={onChangeinGender}>
              <option value="male">male</option>
              <option value="female">female</option>
              <option value="transgender">transgender</option>
              <option value="rather not say">rather not say</option>
              <option value="other">other</option>
            </select>
          ) : (
            <input
              className="input-border"
              disabled
              type="text"
              value={updateGender}
              onChange={onChangeinGender}
            />
          )}
        </div>

        <div className="country-child">
          <h5>Country</h5>
          {editcliked ? (
            <input
              type="text"
              value={updatecountry}
              onChange={onChangeinCountry}
            />
          ) : (
            <input
              disabled
              className="input-border"
              type="text"
              value={stateData.country}
            />
          )}
        </div>
      </div>
      <div className="desc">
        <h5>Description</h5>
        {editcliked ? (
          <textarea
            type="text"
            className="txt-area"
            value={updateDescription}
            onChange={onChangeinDescription}
          />
        ) : (
          <p>{stateData.description}</p>
        )}
      </div>
      <div className="del-edit">
        {editcliked ? (
          <button
            className="cancel-icon"
            onClick={() => setEditClicked(false)}
          >
            <img src={Close_Icon} />
          </button>
        ) : (
          <button  onClick={()=>{setShowDeleteModal(true)}} className="delete-icon">
            <img src={Trash_Icon} />
          </button>
        )}
            
        {editcliked ? (
            (<button disabled={disableOkbtn}  className="check-icon" onClick={submitHandler}>
            <img src={Checkmark_Icon} />
              </button>)
          
        ) : (
          <button className="edit-icon"  onClick={checkAgeHandler} >
            <img src={Edit_Icon} />
          </button>
        )}
        {showAgeModal? (
            <div className="modal">
            <div onClick={toggleAgeModal} className="overlay"></div>
            <div className="modal-content">
              <h3>Age below 18 are not allowed to edit!!</h3>
              <button className="close2-modal" onClick={toggleAgeModal}>
                Close
              </button>
            </div>
          </div>
        ):(null)}

        {showDeleteModal?(
             <div className="modal">
             <div onClick={toggleAgeModal} className="overlay"></div>
             <div className="modal-content">
             <div style={{ display: 'flex', alignItems: 'center', marginTop: '3px', marginLeft: '-30px' }}>
               <h3>Are you sure you want to delete?</h3>
               <button className="cross-modal" onClick={()=>{setShowDeleteModal(false)}}>
               <img src={Cross_Icon} />
               </button>
              </div>
             <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px', marginLeft: '270px' }}>
               <button value="no" className="close-modal" onClick={toggleDeleteModal}>
                 Cancel
               </button>
               <button value= "yes" className="btn-delete" onClick={toggleDeleteModal}>
                 Delete
               </button>
              </div>
             </div>
           </div>
        ):
        (null)
        }
        
      </div>
    </div>
  );
}

export default ViewAccordion;