import React from 'react';
import './MenuButton.css'

type ButtonsProps = {
  text:string
}

export default function MenuButton(props:ButtonsProps) {
  return (
    <div className="MenuButton">
      <span>{props.text}</span>
    </div>
  );
}
