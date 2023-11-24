import React from 'react'

import './Task.css'

import confirmIcon from '../../../assets/confirm.png'
import deleteIcon from '../../../assets/delete.png'

type TaskProps = {
    title: string;
    description: string; // coming soon
    isDone: boolean;
}

export default function (props: TaskProps) {
  return (
    <div className="task_block">
        <p className="title">Title</p>
        <div className="buttons">          
          <div className="confirm"><img src={confirmIcon} alt="check" /></div>
          <div className="delete"><img src={deleteIcon} alt="delete" /></div>
        </div>
    </div>

  )
}
