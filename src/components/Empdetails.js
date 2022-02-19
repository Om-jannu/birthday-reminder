import React from 'react'
import Empdataall from './Empdataall'
import empdata from '../components/empdata.js'
import {Link} from "react-router-dom";

const Empdetails = () => {
  return (
    <div>
        <h1>All Birthdays</h1>
        <Empdataall employee={empdata}/>
        <Link to="/">home</Link>
    </div>
  )
}

export default Empdetails;