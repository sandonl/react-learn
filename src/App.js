import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./Counter";
import Employee from "./Employee";
import ToDoList from "./ToDoList";
import About from "./About";
import Home from "./Home";
import Contact from "./Contact";
import { Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

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
  const history = useHistory();
  const baseEmployeeObject = {
    role: "employee",
    company: "CodeSandbox",
  };
  const firstEmployee = { ...baseEmployeeObject, ...employees[0] };
  console.log(firstEmployee);
  const [loggedIn, setLoggedIn] = useState(false);

  // Now using redux to access the count variable
  const count = useSelector((state) => state.counter.count);

  // Use effect
  useEffect(() => {
    console.log("Something has changed in 'App.js");
  });

  return (
    <div className="App">
      {/* <button onClick={() => history.push("/about")}> About us </button>
      <button onClick={() => history.push("/contact")}> Contact us </button>
      <button onClick={() => history.push("/home")}> Home Page </button> */}

      {/* Acts as a history.push() */}
      <button>
        <Link to="/about"> About Us </Link>
      </button>

      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
      </Switch>

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
          {/* Maps the employees to employee component  */}
          {employees.map((employee) => (
            <div key={employee.id}>
              <Employee {...employee} />
            </div>
          ))}
          {/* Maps the employees to counter component */}
          <h3> The count: {count} </h3>
          {employees.map((voter) => (
            <Counter name={voter.name} />
          ))}
        </header>
      )}
    </div>
  );
}

export default App;
