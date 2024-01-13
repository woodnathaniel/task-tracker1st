import {FaTimes} from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { taskActions } from '../store/tastSlice';


const Task = ({eachTask, onDelete, toggleReminder, id}) => {

    const dispatch = useDispatch()
   
    const deleteTask = () =>{
        dispatch( taskActions.setTask(id))
      }
 

    return (
        <div className={`task ${eachTask.reminder ?
            'reminder':''}`} 
             onDoubleClick={() => toggleReminder(eachTask.id)}
        > 
            
           <h3>{eachTask.schedule.stringValue} 
                <div className='style'>
                    <FaTimes style={{color:'red', cursor:'pointer' }} 
                    onClick={deleteTask}/>
                </div>
           </h3> 
           <p>{eachTask.timeReminder.stringValue} </p>
        </div>
    );
}

export default Task;
