import React from 'react'
import style from "../styles/navbar.module.css";

function Navbar() {
  return (
    <div className={style.root}>
      <div className={style.logo}>
        <p className='primary-text'>Sardorbek Omonkulov</p>
      </div>
      <div className={style.links}>
        <p>Home</p>
        <p>About</p>
        <p>Projects</p>
        <p>Contact</p>
      </div>
    </div>
  )
}

export default Navbar