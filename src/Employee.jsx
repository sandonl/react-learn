import React from "react";

const Employee = (props) => {
  const { name, id, elso } = props;
  return (
    <div>
      <h6> {`Name: ${name}  ID: ${id} Something else: ${elso} `}</h6>
    </div>
  );
};

export default Employee;
