import React from 'react'
import { Link } from 'react-router-dom';
import Bdaythismonth from './Bdaythismonth';
import empdata from './empdata';

const Thismonthbday = () => {
  return (
    <>
    <div>
      <h1>Birthday This Month</h1>
      <Bdaythismonth employee={empdata}/>
      <Link to ="/empdetails">All birthdays</Link>
    </div>
    </>
  )
}

export default Thismonthbday;