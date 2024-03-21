import { useState } from "react";
import "./Button.css";
import "./Calculator.css";
const Calculator = () => {
  const [input, setInput] = useState("");

  const handleButtonClick = (value) => {
    setInput((input) => input + value);
  };

  const clearInput = () => {
    setInput("");
  };

  const deleteInput = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };

  const evaluateExpression = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator-background p-4 bg-black rounded-lg w-64 mx-auto my-12">
      <input
        type="text"
        style={{ fontFamily: "Roboto, sans-serif" }}
        className="input w-full mb-4 p-2 text-xl border border-gray-300 rounded"
        value={input}
        readOnly
      />
      <div className="buttons grid grid-cols-4 gap-2">
        <button
          className="button clear bg-gray-500 hover:bg-gray-600 text-white rounded-full py-2 h-12 w-12 flex items-center justify-center"
          onClick={clearInput}
        >
          C
        </button>

        <button
          className="button delete bg-gray-500 hover:bg-gray-600 text-white rounded-full py-2  h-12 w-12 flex items-center justify-center"
          onClick={deleteInput}
        >
          AC
        </button>
        <button
          className=" buttonSpecial equals  hover:bg-yellow-400 bg-yellow-300 text-white font-bold text-2xl col-span-2 rounded-full "
          onClick={evaluateExpression}
        >
          =
        </button>

        <button
          className="button hover:bg-stone-400 bg-stone-600 text-white font-bold text-xl rounded-full py-2 px-2 h-12 w-12 flex items-center justify-center"
          onClick={() => handleButtonClick("7")}
        >
          7
        </button>
        <button
          className={
            "button hover:bg-stone-400 bg-stone-600 text-white font-bold text-xl rounded-full py-2 px-2 h-12 w-12 flex items-center justify-center"
          }
          onClick={() => handleButtonClick("8")}
        >
          8
        </button>
        <button
          className={
            "button hover:bg-stone-400 bg-stone-600 text-white font-bold text-xl rounded-full py-2 px-2 h-12 w-12 flex items-center justify-center"
          }
          onClick={() => handleButtonClick("9")}
        >
          9
        </button>

        <button
          onClick={() => handleButtonClick("-")}
          className="buttonSpecial hover:bg-yellow-400 bg-yellow-300 text-white font-bold text-2xl rounded-full py-2 px-2 h-12 w-12 flex items-center justify-center"
        >
          -
        </button>
        <button
          className={
            "button hover:bg-stone-400 bg-stone-600 text-white font-bold text-xl rounded-full py-2 px-2 h-12 w-12 flex items-center justify-center"
          }
          onClick={() => handleButtonClick("4")}
        >
          4
        </button>
        <button
          className={
            "button hover:bg-stone-400 bg-stone-600 text-white font-bold text-xl rounded-full py-2 px-2 h-12 w-12 flex items-center justify-center"
          }
          onClick={() => handleButtonClick("5")}
        >
          5
        </button>
        <button
          className={
            "button hover:bg-stone-400 bg-stone-600 text-white font-bold text-xl rounded-full py-2 px-2 h-12 w-12 flex items-center justify-center"
          }
          onClick={() => handleButtonClick("6")}
        >
          6
        </button>
        <button
          onClick={() => handleButtonClick("+")}
          className="buttonSpecial hover:bg-yellow-400 bg-yellow-300 text-white font-bold text-2xl rounded-full py-2 px-2 h-12 w-12 flex items-center justify-center"
        >
          +
        </button>
        <button
          className={
            "button hover:bg-stone-400 bg-stone-600 text-white font-bold text-xl rounded-full py-2 px-2 h-12 w-12 flex items-center justify-center"
          }
          onClick={() => handleButtonClick("1")}
        >
          1
        </button>
        <button
          className={
            "button hover:bg-stone-400 bg-stone-600 text-white font-bold text-xl rounded-full py-2 px-2 h-12 w-12 flex items-center justify-center"
          }
          onClick={() => handleButtonClick("2")}
        >
          2
        </button>
        <button
          className={
            "button hover:bg-stone-400 bg-stone-600 text-white font-bold text-xl rounded-full py-2 px-2 h-12 w-12 flex items-center justify-center"
          }
          onClick={() => handleButtonClick("3")}
        >
          3
        </button>

        <button
          onClick={() => handleButtonClick("/")}
          className="buttonSpecial hover:bg-yellow-400 bg-yellow-300 text-white font-bold text-2xl rounded-full py-2 px-2 h-12 w-12 flex items-center justify-center"
        >
          ÷
        </button>
        <button
          className={
            "button hover:bg-stone-400 bg-stone-600 text-white font-bold text-xl col-span-2 rounded-full py-2 px-2 h-12  flex items-center justify-center"
          }
          onClick={() => handleButtonClick("0")}
        >
          0
        </button>
        <button
          className={
            "button hover:bg-stone-400 bg-stone-600 text-white font-bold text-xl rounded-full py-2 px-2 h-12 w-12 flex items-center justify-center"
          }
          onClick={() => handleButtonClick(".")}
        >
          &#46;
        </button>
        <button
          onClick={() => handleButtonClick("*")}
          className="buttonSpecial hover:bg-yellow-400 bg-yellow-300 text-white font-bold text-2xl rounded-full py-2  h-12 w-12 flex items-center justify-center"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Calculator;
