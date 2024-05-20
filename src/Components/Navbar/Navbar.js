import React from 'react'
import classes from "./Navbar.module.css";
import logo from "../../assets/MotionArtEffect-logo.png";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.nav}>
      <img src={logo} className={classes.logo} />
            <button className={classes.btn}>Purchase Now</button>
    </div>
      </div>
  )
}

export default Navbar