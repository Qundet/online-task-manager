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
import UncompletedTasks from './components/ContentBars/UncompletedTasks/UncompletedTasks';
import CompletedTasks from './components/ContentBars/CompletedTasks/CompletedTasks';

function App() {

  const [tasks, setTasks] = useState([
    {id:1, title:'First Task', isDone: true},
    {id:2, title:'First Task', isDone: true}
  ])

  return (
    <div className="App">
      <MenuBar/>
      <div className="ContentBar">
        <Routes>
          <Route path='/' element= {<AllTasks/>}/>
          <Route path='/completed' element= {<CompletedTasks/>}/>
          <Route path='/uncompleted' element= {<UncompletedTasks/>}/>
          <Route path='/add-task' element= {<AddTask/>}/>
        </Routes>      
      </div>
      
    </div>
  );
}

export default App;
