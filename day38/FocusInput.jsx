import { useRef } from "react";

function FocusInput() {

  const inputRef = useRef(null);

  function handleFocus() {
    inputRef.current.focus();
  }

  return (
    <div>

      <input
        type="text"
        ref={inputRef}
        placeholder="Enter text"
      />

      <button onClick={handleFocus}>
        Focus
      </button>

    </div>
  );
}

export default FocusInput;