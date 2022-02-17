import React from 'react'
import Empdataall from './Empdataall'
import empdata from '../components/empdata.js'

const Empdetails = () => {
  return (
    <div>
        <h1>
            All employee details
        </h1>
        <Empdataall employee={empdata}/>
    </div>
  )
}

export default Empdetails;