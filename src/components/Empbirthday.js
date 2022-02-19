import React from 'react'
import {Link} from "react-router-dom";
import empdata from '../components/empdata.js'
import Todaybirthday from './Todaybirthday.js';
// import Thismonthbday from './Thismonthbday.js';

const Empbirthday = () => {
  return (
    <>
    <div>Empbirthday</div>
    <Todaybirthday employee={empdata}/>
    <Link to="/">home</Link>
    <Link to = "/thismonthbday">Bday this month</Link>
    </>
  )
}

export default Empbirthday