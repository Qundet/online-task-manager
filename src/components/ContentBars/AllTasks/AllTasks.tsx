import React from 'react'
import Task from '../Task/Task'

type TaskT = {
  id: number,
  title: string,
  isDone: boolean
}

type TasksPropsT = {
  tasks: Array<TaskT>
}

export default function AllTasks(props: TasksPropsT) {
  return (
    <>
    <h1>All tasks</h1>
    <div className="tasks_block">
      {props.tasks.map(t => <Task key={t.id} id={t.id} title={t.title} isDone={t.isDone}/>)}
    </div>
    </>
  )
}
