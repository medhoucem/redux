import React, { useState } from 'react'
import Tasks from './Tasks'
import { useDispatch, useSelector } from 'react-redux'
import { addtask } from '../TaskSlice'

const TaskList = () => {
    let t= useSelector(state=>state.todo.Task)
    const [newtask, setnewtask] = useState({
        title :"",
        todo :false
    },)
    const dispatch = useDispatch()
  return (
    <div className='list'>
   <input onChange={(e)=>setnewtask({...newtask,title:e.target.value})} type="text" />
   <button onClick={()=>dispatch(addtask(newtask))}>add</button>
   {t.map(el=><Tasks els={el}/>)}
    

    </div>
  )
}

export default TaskList
