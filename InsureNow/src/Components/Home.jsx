import React from 'react'
import './Style.css'
import { NavLink, useNavigate, } from 'react-router-dom'
import HexagonHoneycomb from './utils/HexagonComb'

const Home = () => {

  const navigate = useNavigate()
   const clickhandler = ()=>{
    navigate('/login');
   }
  return (
   <>
   <div className='home'>
   <header className='header'>
     <div className='headeritems'>
      <span>InsureNow </span>
      <ul className='navlinks'>
       <NavLink to='/Home' className={({ isActive }) => isActive ? 'active-link' : ''} ><li>Home</li></NavLink>
       <NavLink to='/Coverages' className={({ isActive }) => isActive ? 'active-link' : ''}><li>ForYou</li></NavLink>
       <NavLink to='/ContactUS' className={({ isActive }) => isActive ? 'active-link' : ''}><li>ContactUs</li></NavLink>
      </ul>
      
      <button className='btn' onClick={clickhandler}>Login</button>
     </div>
    </header>
    <HexagonHoneycomb/>
    </div>
    </>
  )
}

export default Home