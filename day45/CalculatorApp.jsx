import { useState } from "react";

function CalculatorApp() {

  const [input, setInput] = useState("");

  function handleClick(value) {
    setInput(input + value);
  }

  function clearInput() {
    setInput("");
  }

  function calculate() {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput("Error");
    }
  }

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center items-center">

      <div className="bg-white p-6 rounded-2xl shadow-lg w-80">

        <h1 className="text-3xl font-bold text-center mb-5 text-purple-600">
          Calculator
        </h1>

        <input
          type="text"
          value={input}
          readOnly
          className="border w-full p-3 rounded-lg text-right text-2xl mb-4"
        />

        <div className="grid grid-cols-4 gap-3">

          <button onClick={() => handleClick("7")} className="bg-gray-300 p-3 rounded-lg">7</button>
          <button onClick={() => handleClick("8")} className="bg-gray-300 p-3 rounded-lg">8</button>
          <button onClick={() => handleClick("9")} className="bg-gray-300 p-3 rounded-lg">9</button>
          <button onClick={() => handleClick("/")} className="bg-orange-400 p-3 rounded-lg">/</button>

          <button onClick={() => handleClick("4")} className="bg-gray-300 p-3 rounded-lg">4</button>
          <button onClick={() => handleClick("5")} className="bg-gray-300 p-3 rounded-lg">5</button>
          <button onClick={() => handleClick("6")} className="bg-gray-300 p-3 rounded-lg">6</button>
          <button onClick={() => handleClick("*")} className="bg-orange-400 p-3 rounded-lg">*</button>

          <button onClick={() => handleClick("1")} className="bg-gray-300 p-3 rounded-lg">1</button>
          <button onClick={() => handleClick("2")} className="bg-gray-300 p-3 rounded-lg">2</button>
          <button onClick={() => handleClick("3")} className="bg-gray-300 p-3 rounded-lg">3</button>
          <button onClick={() => handleClick("-")} className="bg-orange-400 p-3 rounded-lg">-</button>

          <button onClick={() => handleClick("0")} className="bg-gray-300 p-3 rounded-lg">0</button>
          <button onClick={() => handleClick(".")} className="bg-gray-300 p-3 rounded-lg">.</button>
          <button onClick={calculate} className="bg-green-500 text-white p-3 rounded-lg">=</button>
          <button onClick={() => handleClick("+")} className="bg-orange-400 p-3 rounded-lg">+</button>

        </div>

        <button
          onClick={clearInput}
          className="bg-red-500 text-white w-full mt-4 py-3 rounded-lg hover:bg-red-700"
        >
          Clear
        </button>

      </div>

    </div>
  );
}

export default CalculatorApp;