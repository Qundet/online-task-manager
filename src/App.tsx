/*
  Task manager app
  - Qundet
*/
import React, { useState } from 'react';
import {Routes, Route} from 'react-router-dom'

import './App.css'

import MenuBar from './components/MenuBar/MenuBar';
import AllTasks from './components/ContentBars/AllTasks/AllTasks';
import AddTask from './components/ContentBars/AddTask/AddTask';

function App() {

  const [tasks, setTasks] = useState([
    {id:0, title:'First Task', isDone: true},
    {id:1, title:'First Task', isDone: true}
  ])

  // New task adding
  function addTask(txt:string): void {
    tasks.push({
      id: tasks.length, title: txt, isDone: false
    })
    setTasks(tasks)
  }

  //Task deleting
  function deleteTask(id: number): void {
    tasks.map(t => t.id === id ? delete tasks[id]: null)
    setTasks(tasks)
    console.log(tasks);
  }

  return (
    <div className="App">
      <MenuBar/>
      <div className='content_block'>
        <Routes>
          <Route path='/' element= {<AllTasks tasks={tasks} deleteTask={deleteTask}/>}/>
          <Route path='/add-task' element= {<AddTask addTask={addTask}/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
