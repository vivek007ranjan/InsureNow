import React from 'react'
import './Style.css'
import { NavLink, useNavigate, } from 'react-router-dom'
import { useAuth } from './utils/Auth'
import Charts from './utils/Charts'

const Dashboard = () => {
 
  const navigate = useNavigate()
  const auth =useAuth()

   const clickhandler = ()=>{
    console.log(`user:${auth.username} logged out.`)
    auth.logout();
    navigate('/login');
   }
  return (
   <>
   <div className='dashboard'>
   <header className='header'>
     <div className='headeritems'>
      <span>InsureNow </span>
      {/* <ul className='navlinks'>
       <NavLink to='/Home' className={({ isActive }) => isActive ? 'active-link' : ''} ><li>Home</li></NavLink>
       <NavLink to='/Coverages' className={({ isActive }) => isActive ? 'active-link' : ''}><li>ForYou</li></NavLink>
       <NavLink to='/ContactUS' className={({ isActive }) => isActive ? 'active-link' : ''}><li>ContactUs</li></NavLink>
      </ul> */}
       <span>Dashboard</span>
      
      <button className='btn' onClick={clickhandler}>Logout</button>
     </div>
    </header>
    <Charts/>
    </div>
    </>
  )
}

export default Dashboard