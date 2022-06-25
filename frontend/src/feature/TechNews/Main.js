import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";
import "./tech.css";

import Pagination from "./Pagination";
import Search from "./Search";
import Stories from "./Stories";

const MainTech = () => {
  return (
    <>
      <Search />
      <Pagination />
      <Stories />
    </>
  );
};

export default MainTech;