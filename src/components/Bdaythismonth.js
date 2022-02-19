import React from "react";

const bdaythismonth = ({ employee }) => {
  let currentdate = new Date();
  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let currentmonth = month[currentdate.getMonth()];
  let actualmonth = `${currentmonth}`;
  return employee.map(({ id, name, dob, mob, gender, image }) => {
    let monthob = mob;
    if (actualmonth === monthob) {
      return (
        <div className="singlepersonbox" key={id}>
          <img className="image" src={image} alt={name} />
          <div className="persondetailbox">
            <h3>Name : {name}</h3>
            <h3>DOB : {dob}</h3>
            <h3>Gender : {gender} </h3>
          </div>
        </div>
      );
    }
  });
};
export default bdaythismonth;
