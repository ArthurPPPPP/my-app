import React from "react";
import { BrowserRouter } from "react-router-dom";
import { SearchingPage2 } from "./pages/SearchingPage/SearchingPage2";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <SearchingPage2 />
      </BrowserRouter>
    </div>
  );
};

export default App;
