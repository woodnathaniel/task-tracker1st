import {useEffect, useState} from 'react';
import Tasks from './component/Tasks';
import Header from './component/Header';
import TaskAdd from './TaskAdd';
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore';
import { db } from './firebase/firebaseConfig';
import { useSelector } from 'react-redux';
import IsLoading from './component/IsLoading';


function App() {

  const [docs, setDocs] = useState([]);
  const [docId, setdDocId] = useState([])
  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    
    const UseFirestoreRetrieveData = async ()=>{
            
            const q =  await query(collection(db, 'todo'), orderBy('date', 'desc'));
            const unsubscribe = onSnapshot(q, (querySnapshot) => {
    
                const data = [];
                // const docId = [];
                querySnapshot.forEach((doc) => {
                    console.log(doc);
                    // const objects = doc._document.data.value.mapValue.fields
                    data.push(doc);
                    // docId.push(doc);
                    // console.log(objects);
                    
                });
                // setdDocId(docId)
                setDocs(data);
                setIsLoading(false)
              }
              
            );
            console.log(docs);
           
    }
    UseFirestoreRetrieveData()
  },[])
     
    const tasks = useSelector((state)=>(state.task.tasks))
    
    const charles = useSelector((state)=>(state.task.setState))
    console.log(docs);


  return (
    <div className="container">
        <Header title={'Task Tracker'} name={'WOOD'}/>
        {!charles && <TaskAdd />}
        { isLoading ? <div className='isloaing'><IsLoading /></div> : 
          docs.length  > 0 ? <Tasks tasks={docs} />
           : <h2 style={{color:'red'}}>No Task on board</h2>
        }   
    </div>
  )
}

export default App;
