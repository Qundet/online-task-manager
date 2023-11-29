/*
  Task manager app
  - Qundet
*/
import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'

import './App.css'

import MenuBar from './components/MenuBar/MenuBar';
import Tasks from './components/ContentBars/Tasks';
import AddTask from './components/ContentBars/AddTask/AddTask';

function App() {

  const [tasks, setTasks] = useState([
    {id:0, title:'0 Task', isDone: true},
    {id:1, title:'1 Task', isDone: true},
    {id:2, title:'2 Task', isDone: true},
    {id:3, title:'3 Task', isDone: true},
    {id:4, title:'4 Task', isDone: true},
    {id:5, title:'5 Task', isDone: true},
  ])

  // New task adding
  function addTask(txt:string): void {
    tasks.push({
      id: tasks.length, title: txt, isDone: false
    })
    setTasks(tasks)
  }

  //Task delete
  function deleteTask(id: number): void {
    let tmpTasks = tasks.filter((task) => task.id !== id)
    // Changing ids
    for (let idx = id; idx < tmpTasks.length; idx++)
      tmpTasks[idx].id = idx;
    setTasks(tmpTasks)
  }

  return (
    <div className="App">
      <MenuBar/>
      <div className='content_block'>
        <Routes>
          <Route path='/' element= {<Tasks tasks={tasks} deleteTask={deleteTask}/>}/>
          <Route path='/add-task' element= {<AddTask addTask={addTask}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
