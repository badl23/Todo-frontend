import DisplayTodos from "./components/DisplayTodos"
import Todos from "./components/Todos"
import "./index.css";

function App() {
  return (
    <>
      <div className="App">
        <h1>Propeer's bootcamp</h1>
        <Todos/>
        <DisplayTodos/>
      </div>
    </>
  )
}

export default App
