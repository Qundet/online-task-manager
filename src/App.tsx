/*
  Task manager app
  - Qundet
*/
import React from 'react';
import './App.css'

import MenuBar from './components/MenuBar/MenuBar';
import TasksBar from './components/TaskBar/TasksBar';

function App() {
  return (
    <div className="App">
      <MenuBar/>
      <TasksBar/>
    </div>
  );
}

export default App;
