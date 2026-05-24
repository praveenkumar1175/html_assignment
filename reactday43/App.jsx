import Navbar from "./Navbar";
import Card from "./Card";
import ButtonGroup from "./ButtonGroup";

function App() {
  return (
    <div className="min-h-screen bg-gray-100">

      <Navbar />

      <div className="p-8 flex flex-col items-center gap-8">

        <Card />

        <ButtonGroup />

      </div>

    </div>
  );
}

export default App;