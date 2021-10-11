import React from 'react'; 

const Employee = (props) => {
    const {firstName, lastName, age} = props; 
    console.log(props);
    return (
        <div>
            <h6> 
                {`Employee: ${firstName} ${" "} ${lastName} Who is age: ${age}`}
            </h6>    
        </div>   
    )
}

export default Employee;