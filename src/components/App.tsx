import React, { useState } from "react";
import SearchBar from "./SearchBar";

function App() {
  const [input, setInput] = useState("");

  function onSubmit(event: React.FormEvent) {
    event.preventDefault();
    console.log(input);
  }

  return (
    <div>
      <SearchBar input={input} setInput={setInput} onSubmit={onSubmit} />
    </div>
  );
}

export default App;
