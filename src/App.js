import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
      </div>
    </BrowserRouter>
  );
}

export default App;
