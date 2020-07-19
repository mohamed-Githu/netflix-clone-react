import React, { useEffect, useState } from 'react'
import './navbar.css'

import profilePic from '../../assets/profile-pic.png'

const Navbar = () => {
  const [show, handleShow] = useState(false)

  const navbarHandler = () => {
    if (window.scrollY > 50) {
      handleShow(true);
    } else {
      handleShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', navbarHandler);

    return () => {
      window.removeEventListener('scroll', navbarHandler);
    }
  }, [])
  
  return (
    <div className={`navbar ${show && 'navbar--blank'}`}>
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/1200px-Netflix_2014_logo.svg.png" 
          alt="Netflix Logo"
          className='navbar__logo'
        />
        <img 
          src={profilePic}
          alt="Netflix Logo"
          className='navbar__avatar'
        />
    </div>
  )
}

export default Navbar
