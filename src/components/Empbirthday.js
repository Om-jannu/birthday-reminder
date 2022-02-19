import React from 'react'
import {Link} from "react-router-dom";
import empdata from '../components/empdata.js'
import Todaybirthday from './Todaybirthday.js';
// import Thismonthbday from './Thismonthbday.js';

const Empbirthday = () => {
  return (
    <>
    <div className="container">
      <h1>Today Birthdays</h1>
      <Todaybirthday employee={empdata}/>
      <div className="linkbox">
        <Link className='link' to="/">home</Link>
      </div>      
      <div className="linkbox">
        <Link className='link' to = "/thismonthbday">Bday this month</Link>
      </div>
    </div>
    
    </>
  )
}

export default Empbirthday