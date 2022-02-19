import React from 'react'

const bdaythismonth = ({employee}) => {
    let currentdate = new Date();
    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let currentmonth = month[currentdate.getMonth()];
    let actualmonth = `${currentmonth}`;
        return employee.map(({id,name,dob,mob,gender,image})=>{
            let monthob = mob;
            if(actualmonth===monthob){
                return(
                    <div key={id}>
                        <img src= {image} alt= {name} />
                        <h4>name : {name}</h4>
                        <h4>Gender : {gender} </h4>
                        <h4>DOB : {dob} </h4>
                        <h4></h4>
                    </div>
                )
            }
        })
    }
export default bdaythismonth;