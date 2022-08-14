import React, { Dispatch, FormEvent, SetStateAction } from "react";

interface SearchBar {
  input: string;
  setInput: Dispatch<SetStateAction<string>>;
  onSubmit: (event: FormEvent) => void;
}

const SearchBar = ({ input, setInput, onSubmit }: SearchBar) => {
  function onInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInput(event.target.value.toUpperCase());
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label>Search image</label>
          <input
            onChange={onInputChange}
            value={input}
            autoFocus={true}
            id="search"
            type="search"
          />
        </div>
      </form>
      <h1>{input}</h1>
    </div>
  );
};

export default SearchBar;
