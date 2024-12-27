import React from "react";

import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <div className="body">
      <Routes>
        <Route path="/*" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
};

export default App;
