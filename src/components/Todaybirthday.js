import React from 'react'

const Todaybirthday = ({employee}) => {
    let currentdate = new Date();
    let newdate = currentdate.getDate();
    let newdate1 = newdate < 10 ? `0${newdate}` : `${newdate}`;
    let month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    let currentmonth = month[currentdate.getMonth()];
    let actualdate = `${newdate1} ${currentmonth}`;

    return employee.map(({id,name,dob,gender,image})=>{
        let bdob = dob;
        if(actualdate===bdob){
            return(
                <div key={id}>
                    <img src= {image} alt= {name} />
                    <h4>name : {name}</h4>
                    <h4>Gender : {gender} </h4>
                    <h4></h4>
                </div>
            )
        }
    })
}

export default Todaybirthday;