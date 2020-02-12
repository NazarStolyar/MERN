import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import 'materialize-css'
import {UseRoutes} from "./routes";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";
import {Navbar} from './components/Navbar'
import {Loader} from './components/Loader'

function App() {

  const {token, login, logout, userId, ready} = useAuth();

  if (!ready) {
      return <Loader />;
  }
  const isAuthenticated =  !!token;
    const routes = UseRoutes(isAuthenticated);
  return (
      <AuthContext.Provider value={{
          token, login, logout, userId, isAuthenticated
      }}>
          <BrowserRouter>
              {isAuthenticated && <Navbar />}
              <div className="container">
                  {routes}
              </div>
          </BrowserRouter>
      </AuthContext.Provider>

  )
}

export default App;
