import {useState} from 'react';
import Tasks from './component/Tasks';
import Header from './component/Header';

function App() {

  const [tasks, setTasks] =useState(
    [
    
        {
            id: 1,
            text: 'Doctors Appointment',
            day:'Feb 5th at 2:30pm',
            reminder: true,
        },
    
        {
            id: 2,
            text:'Meeting at school',
            day:'Feb 6th at 1:30pm',
            reminder: true,
        },
    
        {
            id: 3,
            text:'Food Shopping',
            day:'Feb 5th at 2:30pm',
            reminder:false,
        }
    
    ])

    const deleteTask = (id)=>{
      return(
         setTasks(tasks.filter((task) => task.id !==id))
      )
    }

    const onToggle =(id)=>{
      return(
        setTasks(
          tasks.map((task) => task.id ===id ? 
          {...task, reminder: !task.reminder} : task )
        )
      )
    }

  return (
    <div className="container">
      <Header title={'Task Tracker'}/>
         {
          tasks.length  > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={onToggle}/>
          : <h2 style={{color:'red'}}>No Task on board</h2>
           } 
      </div>
  )
}

export default App;
