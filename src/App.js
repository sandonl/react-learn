import './App.css';
import Employee from './Employee';

const employeeInfo = [
  {
    firstName: "Jack", 
    lastName: "Smith",
    age: "21"
  },
  {
    firstName: "Stephanie", 
    lastName: "A",
    age: "21"
  },
  {
    firstName: "George", 
    lastName: "Howdy",
    age: "21"
  },
  {
    firstName: "Wadu", 
    lastName: "Hek",
    age: "21"
  }
];

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1> Company Directory </h1>

        { employeeInfo.map(employee => {
          return <Employee {...employee} /> 
        })}



          {/* <Employee firstName="Jack" lastName="Smith" age="40" />
          <Employee firstName="Stephanie" lastName="A" age="40" />
          <Employee firstName="Anthony" lastName="B" age="38"/>
          <Employee firstName="George" lastName="C" age="38"/> */}
        

      </header>
    </div>
  );
}

export default App;
