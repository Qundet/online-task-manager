import React from 'react'
import './Header.css'
import userIcon from "../../assets/userIcon.png"

export default function Header() {
  return (
    <div className = "Header">
        <div className="UserIcon">
            <img src={userIcon} alt="user icon" />        
        </div>
        <div className="UserName">
            Qundet Marat
        </div>
    </div>
  )
}
