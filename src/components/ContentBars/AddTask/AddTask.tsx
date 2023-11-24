import React from 'react'

import './AddTask.css'

export default function AddTask() {
  return (
    <React.Fragment>
      <div className='add-task-block'>
        <h1>Create new task</h1>
        <textarea name="" id="" cols={30} rows={10}></textarea>
      </div>
    </React.Fragment>
  )
}
