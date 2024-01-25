import {FaTimes} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { taskActions } from '../store/tastSlice';
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';



const Task = ({eachTask, docId}) => {

    
   
    // const deleteTask = () =>{
    //     dispatch( taskActions.setTask(id))
    //   }

    const onDelete = async (id) => { 
        try {
        await deleteDoc(doc(db, "todo", id))
        } catch (error) {
            alert(`ERROR!!!: ${error}`)
        }
          
    };
   

    console.log(docId);
    
    return (
        <div className='task' > 
            
           <h3>{eachTask.schedule.stringValue} 
                <div className='style' onClick={onDelete.bind(null, docId)}>
                    <FaTimes style={{color:'red', cursor:'pointer' }} />
                </div>
           </h3> 
           <p>{eachTask.timeReminder.stringValue}</p>
        </div>
    );
}

export default Task;
