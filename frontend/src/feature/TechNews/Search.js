import React from "react";
import { useGlobalContext } from "./Context";
import "./tech.css";

const Search = () => {
  const { query, searchPost } = useGlobalContext;
  return (
    <>
      <h1>Tech Website</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <h1>Test</h1>
          {/* <input
            type="text"
            placeholder="search here"
            value={query}
            onChange={(e) => searchPost(e.target.value)}
          /> */}
        </div>
      </form>
    </>
  );
};

export default Search;
