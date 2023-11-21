import React from 'react';
import './MenuBar.css'

import Header from '../Header/Header';
import MenuButton from './MenuButton';

export default function MenuBar() {
  return (
    <div className="MenuBar">
      <Header/>
      <MenuButton text = "New task"/>
      <MenuButton text = "All tasks"/>
      <MenuButton text = "Uncompleted"/>
      <MenuButton text = "Completed"/>
    </div>
  );
}
