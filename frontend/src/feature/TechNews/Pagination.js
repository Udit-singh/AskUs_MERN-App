import React from "react";
import { useGlobalContext } from "./Context";
import "./tech.css";

const Pagination = () => {
  const { nbPages, getPrevPage, getNextPage } = useGlobalContext;
  return (
    <>
      <div className="pagination2-btn">
        <button>PREV</button>
        <p>
          {5 + 1} of {50}
        </p>
        <button>NEXT</button>
      </div>
    </>
  );
};

export default Pagination;
