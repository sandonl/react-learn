import { useEffect, useState } from "react";
import "./App.css";
import Employee from "./Employee";

const employees = [
  {
    name: "Anthony",
    id: "ABC",
    elso: "oogie",
  },
  {
    name: "George",
    id: "QWE",
    elso: "boogie",
  },
  {
    name: "Stephanie",
    id: "STE",
    elso: "woke",
  },
];

function App() {
  const baseEmployeeObject = {
    role: "employee",
    company: "CodeSandbox",
  };
  const firstEmployee = { ...baseEmployeeObject, ...employees[0] };
  console.log(firstEmployee);
  const [loggedIn, setLoggedIn] = useState(false);

  // Use effect
  useEffect(() => {
    console.log("Something has changed in 'App.js");
  });

  return (
    <div className="App">
      {employees && employees.length > 0 && (
        <header className="App-header">
          <h1> Company Directory </h1>
          {loggedIn ? (
            <h2> Hello! you are logged in </h2>
          ) : (
            <h2> Please log in to continue. </h2>
          )}
          <button onClick={() => setLoggedIn(!loggedIn)}>
            {loggedIn ? " Log out" : "Log in"}
          </button>
          {employees.map((employee) => (
            <div key={employee.id}>
              <Employee {...employee} />
            </div>
          ))}
        </header>
      )}
    </div>
  );
}

export default App;
