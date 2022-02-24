import React from "react"
import {Link} from "react-router-dom";

const home = () => {
  return (
    <>
    <div className="container">
      <h1>Budday reminder's</h1>
      <div className="linkbox">
      <Link className="link" to="/empdetails">All Birthdays</Link>
      </div>
      <div className="linkbox">
      <Link className="link" to="/empbirthday">Today birthday's</Link>
      </div>
    </div>
    
    </>
  )
}
export default home;