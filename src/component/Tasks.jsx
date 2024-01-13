import Task from "./Task";



const Tasks = ({tasks})=>{
  
    console.log(tasks);
  return(
        <>
        {tasks && tasks.map((task)=>(
                <Task key={task.id} eachTask={task} id={task.id}/>
            ))
        }
        </>
    )
    
} 
export default Tasks;
