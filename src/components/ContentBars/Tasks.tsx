import React from 'react'
import Task from './Task/Task'

type TaskT = {
  id: number,
  title: string,
  isDone: boolean
}

type TasksPropsT = {
  tasks: Array<TaskT>
  deleteTask: (id:number) => void
}

function Tasks(props: TasksPropsT) {
  return (
    <>
    <h1>All tasks</h1>
    <div className="tasks_block">
      {props.tasks.map(t => <Task deleteTask={props.deleteTask} key={t.id} id={t.id} title={t.title} isDone={t.isDone}/>)}
    </div>
    </>
  )
}

export default Tasks