import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { UnsplashImage } from "../api/types/UnsplashImage";
import { unsplashSearchPhotosOnSubmit } from "../api/unsplash";

function App() {
  const [input, setInput] = useState("");
  const [data, setData] = useState<UnsplashImage[]>([]);

  return (
    <div>
      <SearchBar
        input={input}
        setInput={setInput}
        onSubmit={(e) => unsplashSearchPhotosOnSubmit(e, setData, input)}
      />
      <h1>Found image {data.length}</h1>
    </div>
  );
}

export default App;
