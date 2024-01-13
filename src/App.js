import {useEffect, useState} from 'react';
import Tasks from './component/Tasks';
import Header from './component/Header';
import TaskAdd from './TaskAdd';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';
import { useSelector } from 'react-redux';


function App() {

  const [docs, setDocs] = useState([]);

  useEffect(()=>{
    
    const UseFirestoreRetrieveData = async ()=>{
            
            const q =  await query(collection(db, 'todo'), orderBy('date', 'desc'));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
    
                const data = [];
                querySnapshot.forEach((doc) => {
                   console.log(doc);
                    const objects = doc._document.data.value.mapValue.fields
                    data.push(objects);
                    console.log(objects);
                    
                });
                setDocs(data);
                console.log(data);
              }
              
            );
            console.log(docs);
           
    }
    UseFirestoreRetrieveData()
  },[])
  

    // const dispatch = useDispatch()
    // const deleteTask = (id)=>{
    //   dispatch(taskActions.setTask, id)
    // }

    // const onToggle =(id)=>{
    //   return(
    //     setTasks(
    //       tasks.map((task) => task.id ===id ? 
    //       {...task, reminder: !task.reminder} : task )
    //     )
    //   )
    // }
    // toggleReminder={onToggle}
    // useEffect(() => {

      
    //   
    //   console.log(docs)

   
    // }, [docs]);
   
    const tasks = useSelector((state)=>(state.task.tasks))
    
    const charles = useSelector((state)=>(state.task.setState))
    console.log(docs);


  return (
    <div className="container">
      <Header title={'Task Tracker'} name={'WOOD'}/>
      {!charles && <TaskAdd />}
        {
          docs.length  > 0 ? <Tasks tasks={docs} />
           : <h2 style={{color:'red'}}>No Task on board</h2>
          
        }   
    </div>
  )
}

export default App;
