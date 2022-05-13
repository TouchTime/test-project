import React, { useState } from "react";
import Count from "./components/count";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <button
        onClick={() => {
          setCount((v) => v + 1);
        }}
      >
        清空
      </button>
      <Count count={count} />
    </div>
  );
}

export default App;
