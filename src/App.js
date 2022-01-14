import { BrowserRouter, Route } from "react-router-dom";

import "./App.scss";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Writing from "./pages/Writing";
import Analysis from "./pages/Analysis";
import Result from "./pages/Result";
import Mypage from "./pages/Mypage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route exact path="/" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/main" component={Main} />
        <Route path="/writing" component={Writing} />
        <Route path="/analysis" component={Analysis} />
        <Route path="/result" component={Result} />
        <Route path="/mypage" component={Mypage} />
      </div>
    </BrowserRouter>
  );
}

export default App;
