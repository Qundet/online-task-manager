import React from 'react';
import { Link } from 'react-router-dom';

import './MenuBar.css'

import Header from '../Header/Header';
import MenuButton from './MenuButton';

export default function MenuBar() {
  return (
    <div className="MenuBar">
      <Header/>
      <Link to="add-task">
        <MenuButton text = "New task"/>
      </Link>
      <Link to="/">
        <MenuButton text = "Tasks"/>
      </Link>      
    </div>
  );
}
