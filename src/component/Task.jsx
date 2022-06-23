import {FaTimes} from 'react-icons/fa';


const Task = ({eachTask, onDelete, toggleReminder}) => {
    return (
        <div className={`task ${eachTask.reminder ?
            'reminder':''}`} 
             onDoubleClick={() => toggleReminder(eachTask.id)}
        > 
            
           <h3>{eachTask.text} 
           <div className='style'>
           <FaTimes style={{color:'red', cursor:'pointer' }} 
           onClick={ () => onDelete(eachTask.id)}/>
           </div>
           
           </h3> 
           <p>{eachTask.day} </p>
        </div>
    );
}

export default Task;
