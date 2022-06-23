import Task from "./Task";



const Tasks = ({tasks, onDelete, toggleReminder})=>{
   


    return(
        <>
        
        {tasks.map((task)=>(
            <Task key='task.id' eachTask={task} onDelete={onDelete} toggleReminder={toggleReminder}/>
        ))}
        </>
    )
}; export default Tasks;