import "./App.css";
import React, { Suspense, lazy } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";
import Loader from "./components/loader/loader.component";
const Dashboard = lazy(() => import("./pages/dashboard/dashboard.component"));

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path={"/"} exact={true} element={<Dashboard />} />
            </Routes>
          </Suspense>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}

export default App;
