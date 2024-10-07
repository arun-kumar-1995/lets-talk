import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import appRoutes from "./routes/appRoutes";
const App = () => {
  return (
    <>
      <Suspense fallback={<div>....</div>}>
        <Router>
          <Routes>
            {appRoutes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.element />}
              />
            ))}
          </Routes>
        </Router>
      </Suspense>
    </>
  );
};

export default App;
