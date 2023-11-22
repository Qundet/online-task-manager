/*
  Task manager app
  - Qundet
*/
import React from 'react';
import {Routes, Route} from 'react-router-dom'

import './App.css'

import MenuBar from './components/MenuBar/MenuBar';
import AllTasks from './components/ContentBars/AllTasks/AllTasks';
import AddTask from './components/ContentBars/AddTask/AddTask';
import UncompletedTasks from './components/ContentBars/UncompletedTasks/UncompletedTasks';
import CompletedTasks from './components/ContentBars/CompletedTasks/CompletedTasks';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <div className="TasksBar">
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
