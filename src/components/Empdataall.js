import React from 'react'

const Empdataall = ({employee}) => {
  return employee.map((item)=>{
    const{id,name,dob,gender,image}= item;
    return(
        <div className='singlepersonbox' key={id}>   
            <img className='image' src={image} alt={name}/> 
            <div className='persondetailbox'>
                <h3>Name : {name}</h3>
                <h3>DOB : {dob}</h3>
                <h3>Gender : {gender} </h3>
            </div>
        </div>
    )
  }) 
}

export default Empdataall;