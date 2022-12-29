import { useState } from "react";
import { Home } from "./screens/Home";
import { Login } from "./screens/Login/Login";

import "./style/reset.css";
import "./style/index.css";



function App() {
  const [isAuthenticated, setisAuthenticated] = useState(true);
  const handleLogin=()=>setisAuthenticated(true);
  return (
    <div className="wrapper">
      {isAuthenticated ? <Home /> : <Login  onLogin={handleLogin}/>}
    
     
    <Home/>
      
      </div>
      
  );
}

export default App;

