import "./App.css";
import Employee from "./Employee";

const employees = [
  {
    name: "Anthony",
    id: "ABC",
  },
  {
    name: "George",
    id: "CBA",
  },
  {
    name: "Stephanie",
    id: "STE",
  },
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Company Directory </h1>
        {employees.map((employee) => (
          <div key={employee.id}>
            <Employee name={employee.name} id={employee.id} />
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
