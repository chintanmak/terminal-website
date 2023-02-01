import React from 'react';
import '../styles/_navbar.scss';
import { Outlet, Link } from "react-router-dom";
import about from '../assets/about.png';
import contact from '../assets/contact.png';

export default function Navbar() {
  return (
    <>
        <div className='navbar_container'>
          <a href='/about'><img src={about} /></a>
          <a href=''><img src={contact} /></a>
        </div>
        
        <Outlet />
    </>
  )
}
