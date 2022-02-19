import React from "react"
import {Link} from "react-router-dom";

const home = () => {
  return (
    <>
    <div>
      <h1>home page</h1>
    </div>
    <Link to="/empdetails">employee details</Link>
    <Link to="/empbirthday">today birthday</Link>
    </>
  )
}

export default home;