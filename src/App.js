import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/main" component={Main} />
      </div>
    </BrowserRouter>
  );
}

export default App;
