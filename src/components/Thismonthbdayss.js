import React from 'react'
import { Link } from 'react-router-dom';
import Bdaythismonth from './Bdaythismonth';
import empdata from './empdata';

const Thismonthbday = () => {
  return (
    <div className='container'>
      <h1>Birthday This Month</h1>
      <Bdaythismonth employee={empdata}/>
      <div className="linkbox">
          <Link className='link' to="/">home</Link>
        </div>
      <div className="linkbox">
      <Link className='link' to ="/empdetails">All birthdays</Link>
      </div>
    </div>
  )
}

export default Thismonthbday;