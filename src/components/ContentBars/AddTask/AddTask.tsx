import React, { useState } from 'react'

import './AddTask.css'

interface AddTaskProps {
   addTask: (text:string) => void;
}

export default function AddTask({addTask}: AddTaskProps) {
  const [text, setText] = useState<string>('')

  return (
    <>
      <h1>Create new task</h1>
      <div className='add-task_block'>        
        <div className="form_block">
          <textarea onChange={(e) => setText(e.target.value)} cols={30} rows={10}></textarea>
          <button onClick={() => addTask(text)} className='save_button'>Save</button>
        </div>        
      </div>
    </>
  )
}
