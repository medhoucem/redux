import { createSlice } from '@reduxjs/toolkit'
import { Task } from './store/Task'
const initialState = {
  Task
}

export const TaskSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addtask:(state,action)=>{
        state.Task=[...state.Task,action.payload]

    }
   
  },
})

// Action creators are generated for each case reducer function
export const { addtask} = TaskSlice.actions

export default TaskSlice.reducer