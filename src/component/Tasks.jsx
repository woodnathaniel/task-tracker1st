import Task from "./Task";
import { useState } from "react";


const Tasks = ({tasks})=>{

    const [viewMore, setViewMore] = useState(2);

    console.log(tasks);
  return(
        <>
        {tasks && tasks.slice(0, viewMore).map((task)=>(
                <Task docId={task.id} eachTask={task._document.data.value.mapValue.fields} />
            ))
        }
        <p style={{
            color: 'blue',
            marginTop: 50,
            marginBottom: 0,
            textDecoration: 'underline',
            cursor: 'pointer',
            display: 'flex',
            position: 'relative',
            right: '0px'
        }}  onClick={() =>{setViewMore(viewMore +2)}}>view more</p>
        </>
    )   
} 
export default Tasks;
