import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchingPage } from "./pages/SearchingPage/SearchingPage";
import { ReposPage } from "./pages/ReposPage/ReposPage";
import { Layout } from "./components/Layout/Layout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<SearchingPage />} />
            <Route path="repos" element={<ReposPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
