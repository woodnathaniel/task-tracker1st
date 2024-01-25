import { createSlice } from "@reduxjs/toolkit"
import { type } from "@testing-library/user-event/dist/type";




export const taskSlice = createSlice({
      name: 'task',
      initialState: {
        setState: true,

        tasks:[
            {
                id: 1,
                text: 'Doctors Appointment',
                day:'Feb 5th at 0:0pm',
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
        
        ]

      },
      reducers :{
          setState(state){
            state.setState = !state.setState;
            console.log(state);
          },

          setTask(state, action){
              const id = action.payload
              console.log(id)
              state.tasks = state.tasks.filter(task => task.id !== id)
          }
        }
  })

export const taskActions = taskSlice.actions;
