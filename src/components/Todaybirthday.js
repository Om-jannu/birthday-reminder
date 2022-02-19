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
                // <div key={id} className >
                //     <img src= {image} alt= {name} />
                //     <h4>name : {name}</h4>
                //     <h4>Gender : {gender} </h4>
                //     <h4></h4>
                // </div>
    
            <div className='singlepersonbox' key={id}>   
                <img className='image' src={image} alt={name}/> 
                <div className='persondetailbox'>
                    <h3>Name : {name}</h3>
                    <h3>DOB : {dob}</h3>
                    <h3>Gender : {gender} </h3>
                </div>
            
        </div>
            )
        }
    })
}

export default Todaybirthday;