import React from 'react'
import Empdataall from './Empdataall'
import empdata from '../components/empdata.js'
import {Link} from "react-router-dom";

const Empdetails = () => {
  return (
    <div className='container'>
        <h1>All Birthdays</h1>
        <Empdataall employee={empdata}/>
        <div className="linkbox">
          <Link className='link' to="/">home</Link>
        </div>
        <div className="linkbox">
        <Link className='link' to="/empbirthday">Today Birthdays</Link>
        </div>
    </div>
  )
}

export default Empdetails;