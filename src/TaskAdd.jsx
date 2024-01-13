import React, { useState } from 'react'
import './taskAdd.css'
import {  collection, addDoc } from "firebase/firestore"; 
import { db } from "./firebase/firebaseConfig";



const TaskAdd = () => {

    const [data, setData] = useState({schedule: "", reminderPeriod: "" });
   
    const UseFirestore  = async (props)=>{
     
      console.log(props);
    
      if(props.length === 0){
        try {
          const docRef = await addDoc(collection(db, "todo"), {
           
            schedule: props.schedule,
            timeReminder: props.reminderPeriod,
            date: new Date()
          });
          console.log("Document written with ID: ", docRef.id);
          alert(docRef.id) 
        } catch (e) {
          console.error("Error adding document: ", e);
          alert(e)
        } 
      }else{
        alert('empty fields are allowed')
      }
       
    }

    const handleSubmit = (e)=>{
      e.preventDefault()
      UseFirestore(data)
    }

    const handleOnchange = (e)=>{  
      setData({...data, [e.target.name]: e.target.value,})
    }
    
  return (
    <form className='taskAdd_Form' action="" onSubmit={handleSubmit}>
      <label htmlFor="text">Your Schedule</label>
      <input 
        type="text" 
        name='schedule' 
        id="schedule"
        placeholder='Your Schedule' 
        onChange={handleOnchange} 
        value={data.schedule}
      />
      <label htmlFor="">Day/Time</label>
      <input type="text" 
        name='reminderPeriod' 
        id='reminderPeriod'
        placeholder='day/time'
        onChange={handleOnchange} 
        value={data.reminderPeriod}
      />
      <button className='btn-submitted' type='submit'>Add </button>
      <p>{data.schedule}  {data.reminderPeriod} </p>
    </form>
  )
} 

export default TaskAdd;