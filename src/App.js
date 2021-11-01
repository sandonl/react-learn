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

  return (
    <div className="App">
      <header className="App-header">
        <h1> Company Directory </h1>
        {employees.map((employee) => (
          <div key={employee.id}>
            <Employee {...employee} />
          </div>
        ))}
      </header>
    </div>
  );
}

export default App;
