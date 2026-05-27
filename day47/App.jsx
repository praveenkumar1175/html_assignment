import Counter from "./Counter";
import Todos from "./Todos";

function App() {
  return (
    <div style={{ padding: "20px" }}>

      <h1>Redux Toolkit App</h1>

      <Counter />

      <Todos />

    </div>
  );
}

export default App;