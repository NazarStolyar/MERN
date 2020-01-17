import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import 'materialize-css'
import {UseRoutes} from "./routes";

function App() {
  const routes = UseRoutes(false);
  return (
          <BrowserRouter>
              <div className="container">
              {routes}
              </div>
          </BrowserRouter>
  )
}

export default App;
