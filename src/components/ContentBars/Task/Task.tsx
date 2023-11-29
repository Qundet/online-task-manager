import React from 'react'

import './Task.css'

import confirmIcon from '../../../assets/confirm.png'
import deleteIcon from '../../../assets/delete.png'

type TaskPropsT = {
    id: number;
    title: string;
    // description: string; // coming soon
    isDone: boolean;
    deleteTask: (id:number) => void;
}

function Task(props: TaskPropsT) {
  return (
    <div className="task_block">
        <div className="title">{props.id}) {props.title}</div>
        <div className="buttons">          
          <div className="confirm"><img src={confirmIcon} alt="check" /></div>
          <div onClick={() => props.deleteTask(props.id)} className="delete"><img src={deleteIcon} alt="delete" /></div>
        </div>
    </div>

  )
}

export default Task